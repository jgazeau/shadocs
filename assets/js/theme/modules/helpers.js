import {
  widescreenSize,
  desktopSize,
  tabletSize,
  sizeTriggerWidescreen,
  sizeTriggerDesktop,
  sizeTriggerTouch,
  sizeTriggerMobile,
  mediaTriggerHover,
  mediaTriggerNoHover,
  resizeFunctionsList,
} from './const.min.js';

// VARS //
let isManualCollapsedSidebar = false;
let isManualCollapsedToc = false;
// MAIN //
// Function that manage modals closing
// If an element is given as input, we only close the modal associated
export function closeModals(e) {
  if (e) {
    closeModal(e);
  } else {
    let modals = document.getElementsByClassName('modal-container');
    for (const modal of modals) {
      closeModal(modal);
    }
  }
}
// Function that close a single modal
function closeModal(modal) {
  if (modal.id === 'modalContainer') {
    document.getElementById('modal').innerHTML = '';
  }
  modal.classList.toggle('is-hidden', true);
}
// Decode Base64 to original data from Hugo (safeJS | base64Encode)
export function atou(b64) {
  return decodeURIComponent(escape(atob(b64)));
}
// Add function to the list of function to call during a resize event
export function addFunctionToResizeEvent(f) {
  let isFound = false;
  for (let i = 0; i < resizeFunctionsList.length; i++) {
    if (resizeFunctionsList[i].name === f.name) {
      resizeFunctionsList[i] = f;
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    resizeFunctionsList[resizeFunctionsList.length] = f;
  }
}
// Get the actual size and return associated triggers
export function getTriggers() {
  let triggers = [];
  if (document.body.clientWidth >= widescreenSize) {
    triggers.push(sizeTriggerWidescreen);
  }
  if (document.body.clientWidth >= desktopSize) {
    triggers.push(sizeTriggerDesktop);
  }
  if (document.body.clientWidth >= tabletSize) {
    triggers.push(sizeTriggerTouch);
  }
  if (document.body.clientWidth < tabletSize) {
    triggers.push(sizeTriggerMobile);
  }
  if (window.matchMedia('(hover: hover)').matches) {
    triggers.push(mediaTriggerHover);
  } else {
    triggers.push(mediaTriggerNoHover);
  }
  return triggers;
}
// Add element to modal
export function addElementToModal(el) {
  let mc = document.getElementById('modal');
  mc.appendChild(el);
}
// Display modal container
export function displayModal() {
  document
    .getElementById('modalContainer')
    .classList.toggle('is-hidden', false);
}
// Check if an element is in the viewport
export function isInViewport(e) {
  return (
    e.getBoundingClientRect().bottom !== 0 &&
    e.getBoundingClientRect().right !== 0 &&
    e.getBoundingClientRect().top !== 0 &&
    e.getBoundingClientRect().left !== 0
  );
}
// Check if an element is fully visible in a scroll container
export function isInScrollContainer(e, c) {
  return (
    e.getBoundingClientRect().top > c.getBoundingClientRect().top &&
    e.getBoundingClientRect().bottom < c.getBoundingClientRect().bottom
  );
}
// Get the first ancestor containing the input given class
export function getFirstAncestorByClass(e, cls) {
  while ((e = e.parentNode) && e.classList && !e.classList.contains(cls));
  if (!e.classList) {
    return null;
  } else {
    return e;
  }
}
// Check if the element can hold the copy option
export function isPreCopyToEnable(e) {
  let firstCodeChild = e.querySelector(':scope > code:first-of-type');
  if (
    e.tagName === 'PRE' &&
    firstCodeChild &&
    !firstCodeChild.classList.contains('language-mermaid')
  ) {
    let te = e;
    while (
      (te = te.parentNode) &&
      te.classList &&
      !te.classList.contains('highlight')
    );
    if (!te.classList) {
      return true;
    } else {
      let tp = te.querySelectorAll('pre');
      if (tp[tp.length - 1] === e) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
// Get the scroll offset to make an item positioned at the edge of its scrollable container
export function getScrollOffset(e, sc) {
  if (e.getBoundingClientRect().top < sc.getBoundingClientRect().top) {
    return e.getBoundingClientRect().top - sc.getBoundingClientRect().top;
  } else if (
    e.getBoundingClientRect().bottom > sc.getBoundingClientRect().bottom
  ) {
    return e.getBoundingClientRect().bottom - sc.getBoundingClientRect().bottom;
  } else {
    return 0;
  }
}
// Get the scroll offset to make an item positioned in the middle of its scrollable container
export function getScrollMiddleOffset(e, sc) {
  return (
    (e.getBoundingClientRect().bottom +
      e.getBoundingClientRect().top -
      (sc.getBoundingClientRect().bottom + sc.getBoundingClientRect().top)) /
    2
  );
}
// Sort results of json array based on input properties
export function sortByProperties() {
  let properties = arguments;
  return function (x, y) {
    let tempX = x;
    let tempY = y;
    for (let i = 0; i < properties.length; i++) {
      tempX = tempX[properties[i]];
      tempY = tempY[properties[i]];
    }
    return tempX === tempY ? 0 : tempX > tempY ? 1 : -1;
  };
}
// Check if an element is focusable
export function isFocusable(e) {
  const x =
    e.getBoundingClientRect().left + e.getBoundingClientRect().width / 2;
  const y =
    e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2;
  return e === document.elementFromPoint(x, y);
}
// Function to hide search list
export function hideSearchList() {
  let searchList = document.getElementById('searchList');
  searchList.classList.toggle('is-hidden', true);
  searchList.scrollTop = 0;
  removeActive(searchList.getElementsByTagName('li'));
}
// Function to show all the lists
export function showSearchList() {
  let searchList = document.getElementById('searchList');
  searchList.classList.toggle('is-hidden', false);
  searchList.scrollTop = 0;
}
// Function to check the state of the search list
export function isSearchListHidden() {
  return document.getElementById('searchList').classList.contains('is-hidden');
}
// Function to make a list item inactive for arrow keys management
export function removeActive(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.toggle('is-selected', false);
  }
}
// Function to get a random int based on a max value
export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// Function to get a css variable set in root
export function getCssVar(v) {
  return getComputedStyle(document.documentElement).getPropertyValue(v);
}
// Function that wait for the scroll event to finish
export function waitForScroll(e, delay, maxCount, count = 0) {
  let previousScrollTop = e.scrollTop;
  count++;
  return waitFor(delay).then(() => {
    if (count > maxCount) {
      return Promise.resolve(false);
    } else {
      if (previousScrollTop !== e.scrollTop) {
        previousScrollTop = e.scrollTop;
        return waitForScroll(e, delay, maxCount, count);
      } else {
        return Promise.resolve(true);
      }
    }
  });
}
// Function to set a timeout, returning a promise
export function waitFor(d) {
  return new Promise(function (resolve) {
    setTimeout(resolve, d);
  });
}
// Function to toggle the sidebar at desired state
// - force (true is uncollapsed, false is collapsed)
// - noTransition (true to disable transition, false by default)
export function toggleSidebar(force, noTransition) {
  if (typeof force === 'undefined') {
    force = document
      .getElementById('sidebarContainer')
      .classList.contains('is-sidebar-collapsed');
  }
  if (typeof noTransition === 'undefined') {
    noTransition = false;
  }
  document
    .getElementById('sidebar')
    .classList.toggle('is-transition-disabled', noTransition);
  document
    .getElementById('sidebarContainer')
    .classList.toggle('is-transition-disabled', noTransition);
  document
    .getElementById('sidebarCollapsible')
    .classList.toggle('is-transition-disabled', noTransition);
  document
    .getElementById('sidebarContainer')
    .classList.toggle('is-sidebar-collapsed', !force);
  document
    .getElementById('sidebarContainer')
    .classList.toggle('is-sidebar-uncollapsed', force);
  let ie = document.getElementsByClassName('is-expandable');
  for (let i = 0; i < ie.length; i++) {
    ie[i].classList.toggle('is-hovered', false);
  }
}
// Manage click on collapsible sidebar
export function manageClickCollapsibleSidebar() {
  if (getTriggers().includes(sizeTriggerDesktop)) {
    isManualCollapsedSidebar = !document
      .getElementById('sidebarContainer')
      .classList.contains('is-sidebar-collapsed');
  }
  toggleSidebar();
}
// Manage collapsible sidebar depending on window size
export function manageDefaultCollapsibleSidebar() {
  if (!getTriggers().includes(sizeTriggerDesktop) || isManualCollapsedSidebar) {
    toggleSidebar(false);
  } else {
    toggleSidebar(true);
  }
}
// Function to toggle the extend menu at desired state only if menu is displayed
// - force (true is uncollapsed, false is collapsed)
export function toggleExtendMenu(force) {
  if (typeof force === 'undefined') {
    force = !document
      .getElementById('navbarExtend')
      .classList.contains('is-hovered');
  }
  if (
    !document.getElementById('navbarExtend').classList.contains('is-hidden')
  ) {
    document
      .getElementById('navbarExtendWrapper')
      .classList.toggle('is-hovered', force);
    document
      .getElementById('navbarExtendItemsContainer')
      .classList.toggle('is-transition-disabled', force);
  }
}
// Function to get the first visible element from a CSS selector
// - selector (css element selector)
export function getFirstVisibleElement(selector) {
  for (const elem of document.querySelectorAll(selector)) {
    if (elem.offsetParent !== null) {
      return elem;
    }
  }
}
// Function to disable animation on scroll
export function disableSmoothScroll() {
  let cc = document.getElementById('contentContainer');
  cc.classList.toggle('is-scroll-smooth', false);
}
// Function to enable smooth animation on scroll
export function enableSmoothScroll() {
  let cc = document.getElementById('contentContainer');
  cc.classList.toggle('is-scroll-smooth', true);
}
// Function to toggle the sidebar entry at desired state
// - force (true to expand entry, false to shrink entry)
export function toggleSidebarEntry(e, force) {
  if (typeof force === 'undefined') {
    force = e.classList.contains('is-icon-shrinked');
  }
  let entriesTitle = getFirstAncestorByClass(e, 'is-entries-expandable');
  entriesTitle.classList.toggle('is-entries-shrinked', !force);
  entriesTitle.classList.toggle('is-entries-expanded', force);
  e.classList.toggle('is-icon-shrinked', !force);
  e.classList.toggle('is-icon-expanded', force);
}
// Function to toggle the sidebar entries at desired state
// - force (true to expand all entries, false to shrink all entries)
export function toggleSidebarEntries(force) {
  let iie = document.getElementsByClassName('is-icon-expandable');
  for (let i = 0; i < iie.length; i++) {
    toggleSidebarEntry(iie[i], force);
  }
}
// Function that manage the navbar menu
export function manageNavbarMenu() {
  const navbarExtendWidth = document.getElementById('navbarExtend').offsetWidth;
  const navbarLogoWidth = document.getElementById(
    'globalLogoContainer'
  ).offsetWidth;
  const searchWidth = document.getElementById('searchContainer').offsetWidth;
  const maxLength = document.body.clientWidth - navbarLogoWidth - searchWidth;
  const navbarItems = document.getElementById('navbarItemsEnd').children;
  const navbarExtendItems = document.getElementById(
    'navbarExtendItemsWrapper'
  ).children;
  let tempLength = navbarExtendWidth;
  for (let i = 0; i < navbarItems.length - 1; i++) {
    tempLength =
      tempLength +
      (navbarItems[i].offsetWidth
        ? navbarItems[i].offsetWidth
        : navbarExtendItems[i].offsetWidth);
    if (tempLength > maxLength) {
      navbarItems[i].classList.toggle('is-hidden', true);
      navbarExtendItems[i].classList.toggle('is-hidden', false);
    } else {
      navbarItems[i].classList.toggle('is-hidden', false);
      navbarExtendItems[i].classList.toggle('is-hidden', true);
    }
  }
  document
    .getElementById('navbarExtend')
    .classList.toggle('is-hidden', maxLength >= tempLength);
  document
    .getElementById('navbarItemsEnd')
    .classList.toggle('is-invisible', false);
}
// Function returning a loading helper
export function getLoadingHelper(wrapperClass, wrapperId) {
  let fragment = document.createDocumentFragment();
  const container = document.createElement('div');
  const loading = document.createElement('div');
  const title = document.createElement('span');
  const spinner = document.createElement('div');
  const dots = document.createElement('div');
  const dot = document.createElement('div');
  container.id = wrapperId;
  container.classList.add(
    'helper-loading-container',
    'is-loading',
    wrapperClass
  );
  loading.classList.add('helper-loading');
  title.classList.add('helper-loading-title');
  title.innerHTML = helperLoadingLabel;
  spinner.classList.add('helper-loading-spinner');
  dots.classList.add('helper-loading-dots');
  dot.classList.add('helper-loading-dot');
  fragment.appendChild(container);
  container.appendChild(loading);
  loading.appendChild(title);
  loading.appendChild(spinner);
  spinner.appendChild(dots);
  for (let i = 0; i < 6; i++) {
    dots.appendChild(dot.cloneNode());
  }
  return fragment;
}
// Manage click on TOC
export function manageClickCollapsibleToc() {
  if (getTriggers().includes(sizeTriggerWidescreen)) {
    isManualCollapsedToc = !document
      .getElementById('contentContainer')
      .classList.contains('is-toc-collapsed');
  }
  toggleToc();
}
// Manage TOC depending on window size
export function manageDefaultToc() {
  if (!getTriggers().includes(sizeTriggerWidescreen) || isManualCollapsedToc) {
    toggleToc(false);
  } else {
    toggleToc(true);
  }
}
// Function to toggle the TOC at desired state
// - force (true is uncollapsed, false to collapsed)
export function toggleToc(force) {
  if (typeof force === 'undefined') {
    force = document
      .getElementById('contentContainer')
      .classList.contains('is-toc-collapsed');
  }
  document
    .getElementById('contentContainer')
    .classList.toggle('is-toc-collapsed', !force);
  document
    .getElementById('contentContainer')
    .classList.toggle('is-toc-uncollapsed', force);
}
