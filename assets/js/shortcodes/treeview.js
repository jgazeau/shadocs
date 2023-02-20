import { getFirstAncestorByClass } from '../theme/modules/helpers.min.js';

// VARS //
// MAIN //
let sctv = document.getElementsByClassName('sc-treeview-coll-trigger');
for (let i = 0; i < sctv.length; i++) {
  sctv[i].addEventListener('click', function () {
    let coll = getFirstAncestorByClass(this, 'sc-treeview-coll');
    if (coll) {
      coll.classList.toggle('is-collapsed');
    }
  });
}
