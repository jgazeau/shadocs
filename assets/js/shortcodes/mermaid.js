import {
  addElementToModal,
  atou,
  displayModal,
  getFirstAncestorByClass
} from '../theme/modules/helpers.min.js'

// VARS //
// MAIN //
let mermaidConfig = {
  startOnLoad: false,
  securityLevel: 'loose',
  logLevel: 'fatal',
  theme: 'dark'
};
document.addEventListener('DOMContentLoaded', function() {
  mermaid.mermaidAPI.initialize(mermaidConfig);
  renderAllMermaid();
});
// Render all mermaid graphs of the page
function renderAllMermaid() {
  let divm = document.getElementsByClassName('sc-mermaid');
  for (let i = 0; i < divm.length; i++) {
    renderMermaid(divm[i]);
    let reloadLink = document.getElementById(divm[i].id + '-reload');
    reloadLink.addEventListener('click', function(e) {
      getFirstAncestorByClass(this, 'sc-mermaid-wrapper').classList.toggle('is-loading', true);
      renderMermaid(document.getElementById(this.id.replace('-reload','')));
    });
  }
};
function renderMermaid(md) {
  let mermaidSvgId = md.id + '-svg';
  let mermaidErrorId = md.id + '-error';
  let mermaidError = document.getElementById(mermaidErrorId);
  let graphDefinition = atou(md.getAttribute('mermaid-data'));
  let exportSvgLink = document.getElementById(md.id + '-export-svg');
  let mermaidWrapper = getFirstAncestorByClass(md, 'sc-mermaid-wrapper');
  if (mermaidError) {
    mermaidError.remove();
  }
  let insertSvg = function(svgCode){
    md.insertAdjacentHTML('afterbegin', svgCode);
  };
  try {
    if (mermaid.mermaidAPI.parse(graphDefinition)) {
      mermaid.mermaidAPI.render(mermaidSvgId, graphDefinition, insertSvg);
      let mermaidRendered = document.getElementById(mermaidSvgId);
      let svgBlob = new Blob([mermaidRendered.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
      URL.revokeObjectURL(exportSvgLink.href);
      exportSvgLink.href = URL.createObjectURL(svgBlob);
      exportSvgLink.download = md.id;
      mermaidRendered.classList.toggle('sc-mermaid-svg', true);
      mermaidRendered.classList.toggle('is-modal', true);
      mermaidRendered.addEventListener('click', function(e) {
        if (!e.target.closest('a')) {
          let el = this.cloneNode(true);
          addElementToModal(el);
          displayModal();
        }
      });
      setTimeout(function() {
        exportSvgLink.classList.toggle('is-hidden', false);
        mermaidWrapper.classList.toggle('is-loading', false);
      }, 600);
    }
  } catch (error) {
    const ed = document.createElement('div');
    ed.classList.add('sc-alert', 'sc-alert-error');
    ed.innerHTML = error.str;
    ed.id = mermaidErrorId;
    setTimeout(function() {
      exportSvgLink.classList.toggle('is-hidden', true);
      mermaidWrapper.classList.toggle('is-loading', false);
      md.insertAdjacentElement('afterbegin', ed);
    }, 600);
  }
};
