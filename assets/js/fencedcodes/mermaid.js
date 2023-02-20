import {
  addElementToModal,
  displayModal,
  getLoadingHelper,
} from '../theme/modules/helpers.min.js';

// VARS //
// MAIN //
let mermaidConfig = {
  startOnLoad: true,
  securityLevel: 'loose',
  logLevel: 'fatal',
  theme: 'dark',
};
document.addEventListener('DOMContentLoaded', function () {
  mermaid.mermaidAPI.initialize(mermaidConfig);
  renderMermaids();
});
// Render all mermaid graphs of the page
function renderMermaids() {
  let divm = document.getElementsByClassName('language-mermaid');
  for (let i = 0; i < divm.length; i++) {
    const mermaidId = `scMermaid${i}`;
    const graphDefinition = divm[i].textContent;
    divm[i].parentElement.replaceWith(
      getLoadingHelper('sc-mermaid-wrapper', mermaidId)
    );
    renderMermaid(mermaidId, graphDefinition);
  }
}
function renderMermaid(mermaidId, graphDefinition) {
  const mermaidSvgId = `${mermaidId}-svg`;
  const mermaidWrapper = document.getElementById(mermaidId);
  const mermaidFragment = document.createDocumentFragment();
  const mermaidContainer = document.createElement('div');
  const mermaidSvgExport = document.createElement('a');
  const mermaidSvgExportIcon = document.createElement('i');
  mermaidContainer.classList.add('sc-mermaid-container');
  mermaidSvgExport.classList.add('is-action-button');
  mermaidSvgExportIcon.classList.add('fa-solid', 'fa-download');
  mermaidSvgExport.id = `${mermaidId}-export-svg`;
  mermaidSvgExport.title = svgDownloadLabel;
  mermaidFragment.appendChild(mermaidContainer);
  mermaidContainer.appendChild(mermaidSvgExport);
  mermaidSvgExport.appendChild(mermaidSvgExportIcon);
  mermaidWrapper.appendChild(mermaidFragment);
  try {
    let insertSvg = function (svgCode) {
      mermaidContainer.insertAdjacentHTML('afterbegin', svgCode);
    };
    mermaid.mermaidAPI.render(mermaidSvgId, graphDefinition, insertSvg);
    let mermaidRendered = document.getElementById(mermaidSvgId);
    let svgBlob = new Blob([mermaidRendered.outerHTML], {
      type: 'image/svg+xml;charset=utf-8',
    });
    URL.revokeObjectURL(mermaidSvgExport.href);
    mermaidSvgExport.href = URL.createObjectURL(svgBlob);
    mermaidSvgExport.download = mermaidId;
    mermaidRendered.classList.toggle('sc-mermaid-svg', true);
    mermaidRendered.classList.toggle('is-modal', true);
    mermaidRendered.addEventListener('click', function (e) {
      if (!e.target.closest('a')) {
        let el = this.cloneNode(true);
        addElementToModal(el);
        displayModal();
      }
    });
    mermaidSvgExport.classList.toggle('is-hidden', false);
    mermaidWrapper.classList.toggle('is-loading', false);
  } catch (error) {
    const ed = document.createElement('div');
    ed.classList.add('sc-alert', 'sc-alert-error');
    ed.innerHTML = error;
    ed.id = `${mermaidId}-error`;
    mermaidSvgExport.classList.toggle('is-hidden', true);
    mermaidWrapper.classList.toggle('is-loading', false);
    mermaidContainer.insertAdjacentElement('afterbegin', ed);
  }
}
