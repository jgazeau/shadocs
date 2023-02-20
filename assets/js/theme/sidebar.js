import {
  addFunctionToResizeEvent,
  isInScrollContainer,
  isInViewport,
  getFirstAncestorByClass,
  getScrollMiddleOffset,
  getScrollOffset,
  manageClickCollapsibleSidebar,
  manageDefaultCollapsibleSidebar,
  toggleSidebarEntry,
} from './modules/helpers.min.js';
import { overlayOptions } from './modules/const.min.js';

// VARS //
// MAIN //
//Manage sidebar actions
document.addEventListener('DOMContentLoaded', function () {
  manageDefaultCollapsibleSidebar();
  //Create perfect scrollbar instances
  new OverlayScrollbars(document.getElementById('sidebar'), overlayOptions);
  //Manage expand function for sidebar entries
  let iie = document.getElementsByClassName('is-icon-expandable');
  for (let i = 0; i < iie.length; i++) {
    iie[i].addEventListener('click', function (e) {
      toggleSidebarEntry(this);
    });
  }
  //Manage hover function for sidebar entries when collapsed
  let ifei = document.getElementsByClassName('is-fs-expandable-icon');
  for (let i = 0; i < ifei.length; i++) {
    ifei[i].addEventListener('mouseenter', function (e) {
      let entriesContainer = this.nextElementSibling;
      if (e.relatedTarget !== entriesContainer) {
        let sidebarContainer = document.getElementById('sidebarContainer');
        let sidebarCurrentWidth = parseFloat(
          getComputedStyle(sidebarContainer).getPropertyValue('width')
        );
        let sidebarMinimumWidth = parseFloat(
          getComputedStyle(
            document.getElementById('sidebarMobileWrapper')
          ).getPropertyValue('max-width')
        );
        if (
          sidebarContainer.classList.contains('is-sidebar-collapsed') &&
          entriesContainer &&
          sidebarCurrentWidth <= sidebarMinimumWidth
        ) {
          entriesContainer.classList.toggle('is-hovered', true);
          entriesContainer.classList.toggle('is-invisible', true);
          let sidebar = document.getElementById('sidebar');
          let entriesWrapper = entriesContainer.getElementsByClassName(
            'is-sidebar-list-wrapper'
          )[0];
          // Scroll the sidebar to make the element fully visible
          if (!isInScrollContainer(this, sidebar)) {
            let scrollContainer = getFirstAncestorByClass(this, 'os-viewport');
            if (scrollContainer) {
              scrollContainer.scrollTop =
                scrollContainer.scrollTop +
                getScrollOffset(this, scrollContainer);
            }
          }
          const sidebarPadding = parseFloat(
            getComputedStyle(sidebar).getPropertyValue('padding-top')
          );
          const sidebarBorder = parseFloat(
            getComputedStyle(sidebar).getPropertyValue('border-right-width')
          );
          const logoBorder = parseFloat(
            getComputedStyle(
              document.getElementById('globalLogo')
            ).getPropertyValue('margin-bottom')
          );
          const sidebarTop =
            sidebarContainer.getBoundingClientRect().top - logoBorder;
          const sidebarIconTop =
            this.getBoundingClientRect().top - sidebarPadding - sidebarBorder;
          const sidebarMinTop = Math.max(sidebarIconTop, sidebarTop);
          const entriesHeight = entriesWrapper.getBoundingClientRect().height;
          const offsetBot = window.innerHeight - sidebarMinTop - entriesHeight;
          let entriesTop = '';
          let entriesMaxHeight = '';
          if (offsetBot > 0) {
            entriesTop = sidebarMinTop;
            entriesMaxHeight = window.innerHeight - sidebarMinTop;
          } else {
            entriesTop = sidebarMinTop;
            entriesMaxHeight = window.innerHeight - sidebarMinTop;
          }
          entriesContainer.style.top = entriesTop + 'px';
          entriesContainer.style.left =
            this.getBoundingClientRect().right + 'px';
          entriesWrapper.style.maxHeight = entriesMaxHeight + 'px';
          new OverlayScrollbars(entriesWrapper, overlayOptions);
          manageActiveEntryScroll(
            document.getElementById('sidebarActiveEntry')
          );
          entriesContainer.classList.toggle('is-invisible', false);
        }
      }
    });
    ifei[i].addEventListener('mouseleave', function (e) {
      let sidebarContainer = document.getElementById('sidebarContainer');
      let entriesContainer = this.nextElementSibling;
      let entriesWrapper = entriesContainer.getElementsByClassName(
        'is-sidebar-list-wrapper'
      )[0];
      if (
        sidebarContainer.classList.contains('is-sidebar-collapsed') &&
        entriesContainer
      ) {
        if (e.relatedTarget !== entriesContainer) {
          entriesContainer.classList.toggle('is-hovered', false);
          entriesContainer.style.top = '';
          entriesContainer.style.bottom = '';
          entriesContainer.style.left = '';
          entriesWrapper.style.maxHeight = '';
        }
      }
    });
  }
  let ie = document.getElementsByClassName('is-expandable');
  for (let i = 0; i < ie.length; i++) {
    ie[i].addEventListener('mouseleave', function (e) {
      if (
        e.relatedTarget &&
        getFirstAncestorByClass(e.relatedTarget, 'is-fs-expandable-icon') !==
          this.previousElementSibling
      ) {
        let sidebarContainer = document.getElementById('sidebarContainer');
        if (sidebarContainer.classList.contains('is-sidebar-collapsed')) {
          this.classList.toggle('is-hovered', false);
          this.style.top = '';
          this.style.bottom = '';
          this.style.left = '';
          this.getElementsByClassName(
            'is-sidebar-list-wrapper'
          )[0].style.maxHeight = '';
        }
      }
    });
  }
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
