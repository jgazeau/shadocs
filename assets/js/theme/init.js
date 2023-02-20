import { resizeFunctionsList, shortcutsKeys } from './modules/const.min.js';
import {
  addElementToModal,
  closeModals,
  displayModal,
  getFirstAncestorByClass,
  isPreCopyToEnable,
} from './modules/helpers.min.js';

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function () {
  // Manage shortcuts
  let keyBuffer = [];
  window.addEventListener('blur', () => {
    keyBuffer = [];
  });
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
          if (
            shortcutsKeys[shortcut].keys.every(
              (k, i) =>
                new Intl.Collator([], {
                  usage: 'search',
                  sensitivity: 'base',
                }).compare(k, keyBuffer[i]) === 0
            )
          ) {
            if (
              typeof window[shortcutsKeys[shortcut].function] === 'function'
            ) {
              e.preventDefault();
              window[shortcutsKeys[shortcut].function]();
              keyBuffer = [];
            }
          }
        }
      }
    }
  });
  // Manage modals closing
  document.addEventListener('click', function (e) {
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
      ti.setAttribute('class', 'fa-solid fa-copy');
      if (
        typeof codeCopyBefore !== 'undefined' &&
        typeof codeCopyAfter !== 'undefined'
      ) {
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
      tdiv.addEventListener('click', function (e) {
        const parentWidth = this.parentElement.getBoundingClientRect().width;
        const elementWidth = this.getBoundingClientRect().width;
        this.style.maxWidth = parentWidth - elementWidth + 'px';
        navigator.clipboard.writeText(this.previousElementSibling.textContent);
      });
    }
  }
  // Manage modals for images
  let img = document.querySelectorAll('#content img');
  for (let i = 0; i < img.length; i++) {
    if (img[i].parentNode.tagName !== 'A') {
      img[i].classList.toggle('is-modal', true);
      img[i].addEventListener('click', function (e) {
        let el = document.createElement('img');
        el.src = this.src;
        addElementToModal(el);
        displayModal();
      });
    }
  }
  // Manage tabs in content
  let tt = document.getElementsByClassName('tabs-trigger');
  for (let i = 0; i < tt.length; i++) {
    tt[i].addEventListener('click', function (e) {
      for (let j = 0; j < tt.length; j++) {
        if (this === tt[j]) {
          tt[j].classList.toggle('is-active', true);
        } else {
          tt[j].classList.toggle('is-active', false);
        }
      }
      let tr = document.getElementsByClassName('tabs-results-list');
      for (let j = 0; j < tr.length; j++) {
        if (this.id + '-results' === tr[j].id) {
          tr[j].classList.toggle('is-active', true);
        } else {
          tr[j].classList.toggle('is-active', false);
        }
      }
    });
  }
});
// Function to hide search lists on resize
let scrollResize = false;
window.addEventListener('resize', function () {
  if (!scrollResize) {
    window.requestAnimationFrame(function () {
      for (let i = 0; i < resizeFunctionsList.length; i++) {
        resizeFunctionsList[i]();
      }
      scrollResize = false;
    });
    scrollResize = true;
  }
});
