import {
  addElementToModal,
  displayModal,
} from './theme/modules/helpers.min.js';

// VARS //
// MAIN //
// Function to display a shortcut example
window.scExample = scExample;
function scExample() {
  let el = document.createElement('div');
  el.classList.add('shortcut-example');
  el.innerHTML = '{{- i18n "shortcut_example" -}}';
  addElementToModal(el);
  displayModal();
}
