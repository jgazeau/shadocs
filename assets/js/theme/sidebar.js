import { overlayOptions } from './modules/const.min.js';
import {
  addFunctionToResizeEvent,
  getFirstAncestorByClass,
  getScrollMiddleOffset,
  getScrollOffset,
  isInScrollContainer,
  isInViewport,
  manageClickCollapsibleSidebar,
  manageDefaultCollapsibleSidebar,
  toggleSidebarEntry,
} from './modules/helpers.min.js';

// VARS //
var { OverlayScrollbars } = OverlayScrollbarsGlobal;
// MAIN //
//Manage sidebar actions
document.addEventListener('DOMContentLoaded', function () {
  manageDefaultCollapsibleSidebar();
  //Create perfect scrollbar instances
  OverlayScrollbars(document.getElementById('sidebar'), overlayOptions);
  //Manage expand function for sidebar entries
  let menuItems = document.querySelectorAll('.menu-list a');
  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      // Don't follow the link if it's a section with children
      if (this.nextElementSibling) {
        e.preventDefault();
      }
      let parent = this.parentElement;
      parent.classList.toggle('is-open');
    });
  });
  manageActiveEntryScroll(document.getElementById('sidebarActiveEntry'));
  // Manage click on collapsible sidebar
  document.getElementById('sidebarUncollapse').addEventListener('click', () => {
    manageClickCollapsibleSidebar();
  });
  document.getElementById('sidebarCollapse').addEventListener('click', () => {
    manageClickCollapsibleSidebar();
  });
  // Manage collapsible sidebar during resize of window
  addFunctionToResizeEvent(manageDefaultCollapsibleSidebar);
});
// Manage scroll for the active entry in the sidebar
function manageActiveEntryScroll(e) {
  if (e && isInViewport(e)) {
    let scrollContainer = getFirstAncestorByClass(e, 'os-viewport');
    if (scrollContainer) {
      scrollContainer.scrollTop =
        scrollContainer.scrollTop + getScrollMiddleOffset(e, scrollContainer);
    }
  }
}
