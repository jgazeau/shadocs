import {
  getFirstAncestorByClass
} from '../theme/modules/helpers.min.js';

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function () {
  renderAllJsoneditor();
});
function renderAllJsoneditor() {
  let divj = document.getElementsByClassName('sc-jsoneditor-container');
  for (let i = 0; i < divj.length; i++) {
      renderJsoneditor(divj[i]);
  }
}
function renderJsoneditor(jc) {
  const jsoneditorActionWrapper = document.getElementById(jc.id + '-action-wrapper');
  const jsoneditorCopy = document.getElementById(jc.id + '-copy');
  const jsoneditorDownload = document.getElementById(jc.id + '-download');
  const jsoneditorErrorId = jc.id + '-error';
  const jsoneditorError = document.getElementById(jsoneditorErrorId);
  const jsonPostProcessFunction = jc.getAttribute('post-process-function');
  if (jsoneditorError) {
    jsoneditorError.remove();
  }
  const jsoneditorWrapper = getFirstAncestorByClass(jc, 'sc-jsoneditor-wrapper');
  const jsoneditorPromise = new Promise((resolve) => resolve());
  jsoneditorPromise
    .then(() => {
      return getJsonSchema(jc.getAttribute('jsoneditor-url'));
    })
    .then((schemaContent) => {
      const schema = JSON.parse(schemaContent);
      let jsoneditor = new JSONEditor(jc, {
        array_controls_top: false,
        disable_array_delete_all_rows: true,
        disable_array_delete_last_row: true,
        disable_collapse: false,
        disable_edit_json: true,
        disable_properties: true,
        iconlib: 'fontawesome5',
        prompt_before_delete: false,
        remove_button_labels: true,
        schema: schema,
        theme: "barebones"
      });
      jsoneditorCopy.addEventListener('click', () => {
        if (validateSchema(jsoneditor)) {
          jsoneditorCopy.classList.toggle('sc-jsoneditor-success', true);
          jsoneditorCopy.classList.toggle('sc-jsoneditor-error', false);
          jsoneditorCopy.setAttribute('title-after', codeCopyAfter)
          navigator.clipboard.writeText(JSON.stringify(maybePostProcessJson(jsonPostProcessFunction, jsoneditor.getValue()), null, 2));
        } else {
          jsoneditorCopy.classList.toggle('sc-jsoneditor-success', false);
          jsoneditorCopy.classList.toggle('sc-jsoneditor-error', true);
          jsoneditorCopy.setAttribute('title-after', jsoneditorValidateError)
        }
      });
      jsoneditorDownload.addEventListener('click', () => {
        if (validateSchema(jsoneditor)) {
          URL.revokeObjectURL(jsoneditorDownload.href);
          jsoneditorDownload.href = URL.createObjectURL(new Blob([JSON.stringify(maybePostProcessJson(jsonPostProcessFunction, jsoneditor.getValue()), null, 2)], { type: 'application/json' }));
          jsoneditorDownload.download = schema.title + '.json';
        } else {
          jsoneditorDownload.classList.toggle('sc-jsoneditor-success', false);
          jsoneditorDownload.classList.toggle('sc-jsoneditor-error', true);
          jsoneditorDownload.setAttribute('title-after', jsoneditorValidateError)
        }
      });
      jsoneditorWrapper.classList.toggle('is-loading', false);
    })
    .catch((error) => {
      const ed = document.createElement('div');
      ed.classList.add('sc-alert', 'sc-alert-error');
      ed.innerHTML = error;
      ed.id = jsoneditorErrorId;
      while (jc.lastChild) {
        jc.removeChild(jc.lastChild);
      }
      jsoneditorWrapper.classList.toggle('is-loading', false);
      jsoneditorWrapper.insertAdjacentElement('afterbegin', ed);
      jsoneditorActionWrapper.classList.toggle('is-hidden', true);
      jc.classList.toggle('is-hidden', true);
    });
}
function getJsonSchema(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send(null);
  if (xhr.status === 200) {
    return xhr.responseText;
  } else {
    throw new Error(`Error getting content at ${url} ${xhr.status} ${xhr.statusText}`);
  }
}
function validateSchema(jsoneditor) {
  const errors = jsoneditor.validate();
  if (errors.length) {
    return false;
  } else {
    return true;
  }
}
function maybePostProcessJson(jsonPostProcessFunction, json) {
  if (typeof window[jsonPostProcessFunction] === 'function') {
    return window[jsonPostProcessFunction](json);
  } else {
    return json;
  }
}
