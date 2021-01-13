import {
  desktopSize,
  tabletSize,
  sizeTriggerDesktop,
  sizeTriggerTouch,
  sizeTriggerMobile,
  mediaTriggerHover,
  mediaTriggerNoHover,
  resizeFunctionsList
} from './const.min.js'

// VARS //
let isManualCollapsedSidebar = false;
// MAIN //
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
  if (window.innerWidth >= desktopSize) {
    triggers.push(sizeTriggerDesktop);
  } else if (window.innerWidth >= tabletSize) {
    triggers.push(sizeTriggerTouch);
  } else {
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
  document.getElementById('modalContainer').classList.toggle('is-hidden', false);
}
// Check if an element is in the viewport
export function isInViewport(e) {
  return (
    e.getBoundingClientRect().bottom !== 0 &&
    e.getBoundingClientRect().right !== 0 &&
    e.getBoundingClientRect().top !== 0 &&
    e.getBoundingClientRect().left !== 0
  );
};
// Check if an element is fully visible in a scroll container
export function isInScrollContainer(e,c) {
  return (
    e.getBoundingClientRect().top > c.getBoundingClientRect().top &&
    e.getBoundingClientRect().bottom < c.getBoundingClientRect().bottom
  );
}
// Get the first ancestor containing the input given class
export function getFirstAncestorByClass(e, cls) {
  while ((e = e.parentNode) && (e.classList) && !e.classList.contains(cls));
  if (!e.classList) {
    return null;
  } else {
    return e;
  }
};
// Check if the element can hold the copy option
export function isPreCopyToEnable(e) {
  if (e.tagName === 'PRE') {
    let te = e;
    while ((te = te.parentNode) && (te.classList) && !te.classList.contains('highlight'));
    if (!te.classList) {
      return true;
    } else {
      let tp = te.querySelectorAll('pre');
      if (tp[tp.length-1] === e) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};
// Get the scroll offset to make an item positioned at the edge of its scrollable container
export function getScrollOffset(e, sc) {
  if (e.getBoundingClientRect().top < sc.getBoundingClientRect().top) {
    return e.getBoundingClientRect().top - sc.getBoundingClientRect().top;
  } else if (e.getBoundingClientRect().bottom > sc.getBoundingClientRect().bottom) {
    return  e.getBoundingClientRect().bottom - sc.getBoundingClientRect().bottom;
  } else {
    return 0;
  };
};
// Get the scroll offset to make an item positioned in the middle of its scrollable container
export function getScrollMiddleOffset(e, sc) {
  return (
    ((e.getBoundingClientRect().bottom + e.getBoundingClientRect().top)
      - (sc.getBoundingClientRect().bottom + sc.getBoundingClientRect().top))
    / 2
  );
};
// Sort results of json array based on input properties
export function sortByProperties() {
  let properties = arguments;
  return function(x, y) {
      let tempX = x;
      let tempY = y;
      for (let i = 0; i < properties.length; i++) {
        tempX = tempX[properties[i]];
        tempY = tempY[properties[i]];
      }
      return ((tempX === tempY) ? 0 : ((tempX > tempY) ? 1 : -1));
  };
};
// Check if an element is focusable
export function isFocusable(e) {
  const x = e.getBoundingClientRect().left;
  const y = e.getBoundingClientRect().top;
  return (
    e === document.elementFromPoint(x,y)
  );
};
// Function to hide search list
export function hideSearchList() {
  let searchList = document.getElementById('searchList');
  searchList.setAttribute('hidden', '');
  searchList.scrollTop = 0;
  removeActive(searchList.getElementsByTagName('li'));
};
// Function to show all the lists
export function showSearchList() {
  let searchList = document.getElementById('searchList');
  searchList.removeAttribute('hidden');
  searchList.scrollTop = 0;
};
// Function to check the state of the search list
export function isSearchListHidden() {
  return document.getElementById('searchList').hasAttribute('hidden');
};
// Function to make a list item inactive for arrow keys management
export function removeActive(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove('is-selected');
  }
};
// Function to get a random int based on a max value
export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// Function to get a css variable set in root 
export function getCssVar(v) {
  return getComputedStyle(document.documentElement).getPropertyValue(v);
}
// Function that wait for the scroll event to finish
export function waitForScroll(e, delay, maxCount, count=0) {
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
};
// Function to set a timeout, returning a promise
function waitFor(d) {
  return new Promise(function(resolve) {
    setTimeout(resolve, d);
  });
};
// Function to toggle the navbar at desired state
// - force (true is visible, false is hidden)
export function toggleNavbarMenu(force) {
  if (!getTriggers().includes(sizeTriggerDesktop)) {
    const navbarBurger = document.getElementById('navbarBurger');
    navbarBurger.classList.toggle('is-active', force);
    document.getElementById(navbarBurger.dataset.target).classList.toggle('is-active', force);
    document.getElementById('navbar').classList.toggle('is-navbar-uncollapsed', force);
  }
}
// Function to toggle the sidebar at desired state
// - force (true is uncollapsed, false is collapsed)
// - noTransition (true to disable transition, false by default)
export function toggleSidebar(force, noTransition) {
  if (typeof force === 'undefined') {
    force = document.getElementById('sidebarContainer').classList.contains('is-sidebar-collapsed');
  }
  if (typeof noTransition === 'undefined') {
    noTransition = false;
  }
  document.getElementById('sidebar').classList.toggle('is-transition-disabled', noTransition);
  document.getElementById('sidebarContainer').classList.toggle('is-transition-disabled', noTransition);
  document.getElementById('sidebarCollapsible').classList.toggle('is-transition-disabled', noTransition);
  document.getElementById('sidebarContainer').classList.toggle('is-sidebar-collapsed', !force);
  document.getElementById('sidebarContainer').classList.toggle('is-sidebar-uncollapsed', force);
  let ie = document.getElementsByClassName('is-expandable');
  for (let i = 0; i < ie.length; i++) {
    ie[i].classList.toggle('is-hovered', false);
  };
}
// Manage click on collapsible sidebar
export function manageClickCollapsibleSidebar() {
  if (getTriggers().includes(sizeTriggerDesktop)) {
    isManualCollapsedSidebar = !document.getElementById('sidebarContainer').classList.contains('is-sidebar-collapsed');
  };
  toggleSidebar();
};
// Manage collapsible sidebar depending on window size
export function manageDefaultCollapsibleSidebar() {
  if (!getTriggers().includes(sizeTriggerDesktop) || isManualCollapsedSidebar) {
    toggleSidebar(false);
  } else {
    toggleSidebar(true);
  };
};
