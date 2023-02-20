import {
  addFunctionToResizeEvent,
  manageClickCollapsibleToc,
  manageDefaultToc,
  waitForScroll,
} from './modules/helpers.min.js';

// VARS //
// MAIN //
//Manage Toc actions
document.addEventListener('DOMContentLoaded', function () {
  manageDefaultToc();
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
    }
  }
  // Return the index of the current entry of the Toc
  let getCurrentTocEntryIndex = function (containerTop) {
    let currentTocEntry = -1;
    for (let i = 0; i < te.length; i++) {
      const titleTop = document
        .getElementById(te[i].getAttribute('href').substring(1))
        .getBoundingClientRect().top;
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
  }
  // Change style for current entry
  function tocEntryCurrent(e) {
    e.classList.toggle('is-past', false);
    e.classList.toggle('is-current', true);
  }
  // Change style for next entries
  function tocEntryNext(e) {
    e.classList.toggle('is-past', false);
    e.classList.toggle('is-current', false);
  }
  // Manage toc global behavior
  let scrollTicking = false;
  let isTocClicked = false;
  let cc = document.getElementById('contentContainer');
  let te = document.querySelectorAll('#TableOfContents a');
  for (let i = 0; i < te.length; i++) {
    te[i].addEventListener('click', function (e) {
      isTocClicked = true;
      waitForScroll(cc, 100, 100)
        .then((result) => {
          if (result) {
            manageTocScroll();
            isTocClicked = false;
          } else {
            return Promise.reject('Cannot reach end of scroll');
          }
        })
        .catch((err) => {
          console.error('Error managing click event for ' + this + ': ' + err);
          isTocClicked = false;
        });
    });
  }
  // Function to manage the back to top button
  function manageBackToTop() {
    if (cc.scrollTop > 0) {
      btt.classList.toggle('is-active', true);
    } else {
      btt.classList.toggle('is-active', false);
    }
  }
  let btt = document.getElementById('tocBackToTop');
  if (btt) {
    btt.addEventListener('click', function (e) {
      cc.scrollTop = 0;
      isTocClicked = true;
      waitForScroll(cc, 100, 100)
        .then((result) => {
          if (result) {
            manageTocScroll();
            isTocClicked = false;
          } else {
            return Promise.reject('Cannot reach end of scroll');
          }
        })
        .catch((err) => {
          console.error('Error managing click event for ' + this + ': ' + err);
          isTocClicked = false;
        });
    });
  }
  cc.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        if (!isTocClicked) {
          manageTocScroll();
        }
        manageBackToTop();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });
  // Manage click on collapsible toc
  let tc = document.getElementById('tocCollapsible');
  if (tc) {
    tc.addEventListener('click', () => {
      manageClickCollapsibleToc();
    });
  }
  // Manage collapsible sidebar during resize of window
  addFunctionToResizeEvent(manageDefaultToc);
});
