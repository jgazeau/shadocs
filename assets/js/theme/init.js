import {
  addElementToModal,
  closeModals,
  displayModal,
  getFirstAncestorByClass,
  isPreCopyToEnable,
  waitForScroll
} from './modules/helpers.min.js'
import {
  resizeFunctionsList,
  shortcutsKeys
} from './modules/const.min.js'

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function() {
  // Manage shortcuts
  let keyBuffer = [];
  document.addEventListener('keyup', function (e) {
    const keyIndex = keyBuffer.indexOf(e.key);
    if (keyIndex > -1) {
      keyBuffer.splice(keyIndex, 1);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.target === document.body) {
      if (e.key !== keyBuffer[keyBuffer.length - 1]) {
        keyBuffer.push(e.key);
      }
      for (const shortcut in shortcutsKeys) {
        if (shortcutsKeys[shortcut].keys) {
          if (shortcutsKeys[shortcut].keys.every((k, i) => new Intl.Collator([], {usage: "search", sensitivity: "base"}).compare(k, keyBuffer[i]) === 0)) {
            if (typeof window[shortcutsKeys[shortcut].function] === 'function') {
              e.preventDefault();
              window[shortcutsKeys[shortcut].function]();
            }
          }
        }
      }
    }
  });
  // Manage modals closing
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-container')) {
      closeModals(e.target);
    }
  });
  // Manage copy for blocks code
  let p = document.getElementsByTagName('pre');
  for (let i = 0; i < p.length; i++) {
    if (isPreCopyToEnable(p[i])) {
      let tdiv = document.createElement('div');
      let ti = document.createElement('i');
      tdiv.setAttribute('class', 'copy-code is-action-button');
      ti.setAttribute('class', 'fas fa-copy');
      if ((typeof codeCopyBefore !== 'undefined') && (typeof codeCopyAfter !== 'undefined')) {
        tdiv.setAttribute('title', codeCopyBefore);
        tdiv.setAttribute('title-after', codeCopyAfter);
      }
      if (!getFirstAncestorByClass(p[i], 'highlight')) {
        let elem = p[i];
        let wrapper = document.createElement('div');
        wrapper.classList.add('highlight');
        elem.parentNode.replaceChild(wrapper, elem);
        wrapper.appendChild(elem);
      }
      p[i].appendChild(tdiv);
      tdiv.appendChild(ti);
      tdiv.addEventListener('click', function(e) {
        const parentWidth = this.parentElement.getBoundingClientRect().width;
        const elementWidth = this.getBoundingClientRect().width;
        this.style.maxWidth = (parentWidth - elementWidth) + 'px';
        navigator.clipboard.writeText(this.previousElementSibling.textContent);
      });
    }
  };
  // Manage modals for images
  let img = document.querySelectorAll('#content img');
  for (let i = 0; i < img.length; i++) {
    if (img[i].parentNode.tagName !== 'A') {
      img[i].classList.toggle('is-modal', true);
      img[i].addEventListener('click', function(e) {
        let el = document.createElement('img');
        el.src = this.src;
        addElementToModal(el);
        displayModal();
      });
    };
  };
  // Manage tabs in content
  let tt = document.getElementsByClassName('tabs-trigger');
  for (let i = 0; i < tt.length; i++) {
    tt[i].addEventListener('click', function(e) {
      for (let j = 0; j < tt.length; j++) {
        if (this === tt[j]) {
          tt[j].classList.toggle('is-active', true);
        } else {
          tt[j].classList.toggle('is-active', false);
        }
      };
      let tr = document.getElementsByClassName('tabs-results-list');
      for (let j = 0; j < tr.length; j++) {
        if ((this.id + '-results') === tr[j].id) {
          tr[j].classList.toggle('is-active', true);
        } else {
          tr[j].classList.toggle('is-active', false);
        }
      };
    });
  };
  // Manage toc during scroll
  function manageTocScroll() {
    const containerTop = cc.getBoundingClientRect().top;
    let currentTocEntry = getCurrentTocEntryIndex(containerTop);
    for (let i = 0; i < te.length; i++) {
      if (i < currentTocEntry) {
        tocEntryPast(te[i]);
      } else if (i === currentTocEntry) {
        tocEntryCurrent(te[i]);
      } else {
        tocEntryNext(te[i]);
      }
    };
  };
  // Return the index of the current entry of the Toc
  let getCurrentTocEntryIndex = function (containerTop) {
    let currentTocEntry = -1;
    for (let i = 0; i < te.length; i++) {
      const titleTop = document.getElementById(te[i].getAttribute('href').substring(1)).getBoundingClientRect().top;
      if (Math.floor(titleTop - containerTop) <= 0) {
        currentTocEntry = i;
      }
    }
    return currentTocEntry;
  };
  // Change style for past entries
  function tocEntryPast(e) {
    e.classList.toggle('is-past', true);
    e.classList.toggle('is-current', false);
  };
  // Change style for current entry
  function tocEntryCurrent(e) {
    e.classList.toggle('is-past', false);
    e.classList.toggle('is-current', true);
  };
  // Change style for next entries
  function tocEntryNext(e) {
    e.classList.toggle('is-past', false);
    e.classList.toggle('is-current', false);
  };
  // Manage toc global behavior
  let scrollTicking = false;
  let isTocClicked = false;
  let cc = document.getElementById('contentContainer');
  let te = document.querySelectorAll('#TableOfContents a');
  for (let i = 0; i < te.length; i++) {
    te[i].addEventListener('click', function(e) {
      isTocClicked = true;
      waitForScroll(cc, 100, 100).then(result => {
        if (result) {
          manageTocScroll();
          isTocClicked = false;
        } else {
          return Promise.reject("Cannot reach end of scroll");
        }
      }).catch(err => {
          console.error("Error managing click event for " + this + ": " + err);
          isTocClicked = false;
      });
    });
  };
  // Function to manage the back to top button
  function manageBackToTop() {
    if (cc.scrollTop > 0) {
      btt.classList.toggle('is-active', true);
    } else {
      btt.classList.toggle('is-active', false);
    }
  };
  let btt = document.getElementById('tocBackToTop');
  if (btt) {
    btt.addEventListener('click', function(e) {
      cc.scrollTop = 0;
      isTocClicked = true;
      waitForScroll(cc, 100, 100).then(result => {
        if (result) {
          manageTocScroll();
          isTocClicked = false;
        } else {
          return Promise.reject("Cannot reach end of scroll");
        }
      }).catch(err => {
          console.error("Error managing click event for " + this + ": " + err);
          isTocClicked = false;
      });
    });
  };
  cc.addEventListener('scroll', function() {
    if (!scrollTicking) {
      window.requestAnimationFrame(function() {
        if (!isTocClicked) {
          manageTocScroll();
        }
        manageBackToTop();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });
});
// Function to hide search lists on resize
let scrollResize = false;
window.addEventListener('resize', function() {
  if (!scrollResize) {
    window.requestAnimationFrame(function() {
      for (let i = 0; i < resizeFunctionsList.length; i++) {
        resizeFunctionsList[i]();
      }
      scrollResize = false;
    });
    scrollResize = true;
  }
});
