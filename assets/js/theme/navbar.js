import {
  addFunctionToResizeEvent,
  manageNavbarMenu,
} from './modules/helpers.min.js';

// VARS //
// MAIN //
window.addEventListener('load', function () {
  manageNavbarMenu();
});
document.addEventListener('DOMContentLoaded', function () {
  addFunctionToResizeEvent(manageNavbarMenu);
  // Manage modals from the navbar
  const triggers = document.querySelectorAll('#navbar .navbar-trigger');
  for (const trigger of triggers) {
    const triggeredId = trigger.getAttribute('trigger');
    trigger.addEventListener('click', function () {
      document.getElementById(triggeredId).classList.toggle('is-hidden', false);
    });
  }
});
