import {
  addFunctionToResizeEvent,
  getFirstAncestorByClass,
} from '../theme/modules/helpers.min.js';

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function () {
  renderAllOpenAPI();
});
function renderAllOpenAPI() {
  let divo = document.getElementsByClassName('sc-openapi-container');
  for (let i = 0; i < divo.length; i++) {
    renderOpenAPI(divo[i]);
  }
  if (divo.length) {
    const resizeOpenAPI = function () {
      let divi = document.getElementsByClassName('sc-openapi-iframe');
      for (let i = 0; i < divi.length; i++) {
        setOpenAPIHeight(divi[i]);
      }
    };
    addFunctionToResizeEvent(resizeOpenAPI);
  }
}
function renderOpenAPI(oc) {
  const openapiId = oc.id;
  const openapiErrorId = openapiId + '-error';
  const openapiError = document.getElementById(openapiErrorId);
  if (openapiError) {
    openapiError.remove();
  }
  const oi = document.createElement('iframe');
  const cssRef = '/css/external/swagger-ui/swagger-ui.min.css';
  const cssRel = 'stylesheet';
  const cssType = 'text/css';
  const oiCss = 'html,body { overflow: hidden; }';
  oi.classList.toggle('sc-openapi-iframe', true);
  oi.srcdoc = `
    <html>
      <head>
        <style type='${cssType}'>${oiCss}</style>
        <link rel='${cssRel}' type='${cssType}' href='${cssRef}'>
      </head>
      <body>
        <div id='${openapiId}'></div>
      </body>
    </html>`;
  oi.height = '100%';
  oi.width = '100%';
  oi.onload = () => {
    const openapiWrapper = getFirstAncestorByClass(oc, 'sc-openapi-wrapper');
    const openapiPromise = new Promise((resolve) => resolve());
    openapiPromise
      .then(() => {
        SwaggerUIBundle({
          url: oc.getAttribute('openapi-url'),
          domNode: oi.contentWindow.document.getElementById(openapiId),
          presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        });
      })
      .then(() => {
        let observerCallback = function () {
          setOpenAPIHeight(oi);
        };
        let observer = new MutationObserver(observerCallback);
        observer.observe(oi.contentWindow.document.documentElement, {
          childList: true,
          subtree: true,
        });
      })
      .then(() => {
        openapiWrapper.classList.toggle('is-loading', false);
        setOpenAPIHeight(oi);
      })
      .catch((error) => {
        const ed = document.createElement('div');
        ed.classList.add('sc-alert', 'sc-alert-error');
        ed.innerHTML = error;
        ed.id = openapiErrorId;
        while (oc.lastChild) {
          oc.removeChild(oc.lastChild);
        }
        openapiWrapper.classList.toggle('is-loading', false);
        openapiWrapper.insertAdjacentElement('afterbegin', ed);
      });
  };
  oc.appendChild(oi);
}
function setOpenAPIHeight(oi) {
  oi.style.height =
    oi.contentWindow.document.documentElement.getBoundingClientRect().height +
    'px';
}
