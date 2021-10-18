import {
  addFunctionToResizeEvent,
  addGlobalVariable
} from './modules/helpers.min.js'

// VARS //
// MAIN //
window.addEventListener('load', function() {
  const manageNavbar = function() {
    addGlobalVariable('navbarExtendWidth', document.getElementById('navbarExtend').offsetWidth);
    const navbarLogoWidth = document.getElementById('globalLogoContainer').offsetWidth;
    const navbarItemsStartWidth = document.getElementById('searchContainer').offsetWidth;
    const maxLength = document.body.clientWidth - navbarLogoWidth - navbarItemsStartWidth;
    const navbarItems = document.getElementById('navbarItemsEnd').children
    const navbarExtendItems = document.getElementById('navbarExtendItemsWrapper').children
    let tempLength = navbarExtendWidth;
    for (let i = 0; i < (navbarItems.length -1); i++) {
      tempLength = tempLength + ((navbarItems[i].offsetWidth) ? (navbarItems[i].offsetWidth) : navbarExtendItems[i].offsetWidth)
      if (tempLength > maxLength) {
        navbarItems[i].classList.toggle('is-hidden', true);
        navbarExtendItems[i].classList.toggle('is-hidden', false);
      } else {
        navbarItems[i].classList.toggle('is-hidden', false);
        navbarExtendItems[i].classList.toggle('is-hidden', true);
      }
    }
    document.getElementById('navbarExtend').classList.toggle('is-hidden', (maxLength >= tempLength));
    document.getElementById('navbarItemsEnd').classList.toggle('is-invisible', false);
  };
  manageNavbar();
  addFunctionToResizeEvent(manageNavbar);
})
document.addEventListener('DOMContentLoaded', function() {
  // Manage modals from the navbar
  const triggers = document.querySelectorAll('#navbar .navbar-trigger');
  for (const trigger of triggers) {
    const triggeredId = trigger.getAttribute('trigger')
    trigger.addEventListener('click', function() {
      document.getElementById(triggeredId).classList.toggle('is-hidden', false);
    });
  };
});