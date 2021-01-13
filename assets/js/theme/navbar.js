import {
  toggleNavbarMenu
} from './modules/helpers.min.js'

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function() {
  // Manage navbar burger menu
  document.getElementById('navbarBurger').addEventListener('click', function() {
    toggleNavbarMenu();
  });
  // Manage modals from the navbar
  const triggers = document.querySelectorAll('#navbar .navbar-trigger');
  for (const trigger of triggers) {
    const triggeredId = trigger.getAttribute('trigger')
    trigger.addEventListener('click', function() {
      document.getElementById(triggeredId).classList.toggle('is-hidden', false);
    });
  };
  document.addEventListener('click', function(e) {
    if (e.target === document.getElementById('navbarOverlay')) {
      document.getElementById('navbarBurger').click();
    }
  });
});