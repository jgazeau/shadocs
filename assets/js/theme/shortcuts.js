import {
  isFocusable
} from './modules/helpers.min.js'

// VARS //
// MAIN //
// Function to display info modal
window.scShowInfo = scShowInfo;
function scShowInfo() {
  document.getElementById('navbarInfo').classList.toggle('is-hidden', false);
  document.getElementById('search').blur();
}
// Function to display shortcuts modal
window.scShowShortcuts = scShowShortcuts;
function scShowShortcuts() {
  document.getElementById('navbarShortcuts').classList.toggle('is-hidden', false);
  document.getElementById('search').blur();
}
// Function to go to homepage
window.scGoHome = scGoHome;
function scGoHome() {
  document.getElementById('globalLogo').click();
}
// Function to focus on search function
window.scGoSearch = scGoSearch;
function scGoSearch() {
  if (isFocusable(document.getElementById('searchInput'))) {
    document.getElementById('search').focus();
  }
}
// Function to toggle the sidebar
window.scToggleSidebar = scToggleSidebar;
function scToggleSidebar() {
  document.getElementById('sidebarCollapse').click();
}
// Function to back to top of the current page
window.scBackToTop = scBackToTop;
function scBackToTop() {
  let cc = document.getElementById('contentContainer');
  cc.scrollTop = 0;
}
// Function to go to the bottom of the current page
window.scGoToBottom = scGoToBottom;
function scGoToBottom() {
  let cc = document.getElementById('contentContainer');
  cc.scrollTop = cc.scrollHeight;
}

