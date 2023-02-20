import {
  addElementToModal,
  displayModal,
} from '/js/theme/modules/helpers.min.js';

window.scExample = scExample;

function scExample() {
  let el = document.createElement('div');
  el.classList.add('shortcut-example');
  el.innerHTML = '{{- i18n "shortcut_example" -}}';
  addElementToModal(el);
  displayModal();
}
