import { getFirstAncestorByClass } from '../theme/modules/helpers.min.js';

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function () {
  renderAllAsyncapi();
});
function renderAllAsyncapi() {
  let diva = document.getElementsByTagName('asyncapi-component');
  for (let i = 0; i < diva.length; i++) {
    renderAsyncapi(diva[i]);
  }
}
function renderAsyncapi(ac) {
  setTimeout(function () {
    getFirstAncestorByClass(ac, 'sc-asyncapi-wrapper').classList.toggle(
      'is-loading',
      false
    );
  }, 600);
}
