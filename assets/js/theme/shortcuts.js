import { closeModals, isFocusable } from './modules/helpers.min.js';

// VARS //
// MAIN //
// Function to display info modal
window.scShowInfo = scShowInfo;
function scShowInfo() {
  closeModals();
  document.getElementById('navbarInfo').classList.toggle('is-hidden', false);
  document.getElementById('search').blur();
}
// Function to display shortcuts modal
window.scShowShortcuts = scShowShortcuts;
function scShowShortcuts() {
  closeModals();
  document
    .getElementById('navbarShortcuts')
    .classList.toggle('is-hidden', false);
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
  closeModals();
  let searchInput = document.getElementById('search');
  if (isFocusable(searchInput)) {
    searchInput.focus();
  }
}
// Function to toggle the sidebar
window.scToggleSidebar = scToggleSidebar;
function scToggleSidebar() {
  closeModals();
  document.getElementById('sidebarCollapse').click();
}
// Function to toggle the toc
window.scToggleToc = scToggleToc;
function scToggleToc() {
  closeModals();
  document.getElementById('tocCollapsible').click();
}
// Function to back to top of the current page
window.scBackToTop = scBackToTop;
function scBackToTop() {
  closeModals();
  let cc = document.getElementById('contentContainer');
  cc.scrollTop = 0;
}
// Function to go to the bottom of the current page
window.scGoToBottom = scGoToBottom;
function scGoToBottom() {
  closeModals();
  let cc = document.getElementById('contentContainer');
  cc.scrollTop = cc.scrollHeight;
}
// Function to print the current page
window.scPrint = scPrint;
function scPrint() {
  closeModals();
  document.getElementById('printButton').click();
}
// Function to get current page QR code
window.scQrCode = scQrCode;
function scQrCode() {
  closeModals();
  document.getElementById('qrCodeButton').click();
}
// Function to close all modals
window.scCloseModals = scCloseModals;
function scCloseModals() {
  closeModals();
}
