import {
  getFirstAncestorByClass
} from '../theme/modules/helpers.min.js'

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function() {
  renderAllHighcharts();
});
function renderAllHighcharts() {
  let divh = document.getElementsByClassName('sc-highcharts-container');
  for (let i = 0; i < divh.length; i++) {
    renderHighcharts(divh[i]);
  }
}
function renderHighcharts(hc) {
  const chartType=hc.getAttribute('highcharts-type');
  const chartOptions=hc.getAttribute('highcharts-options');
  const chartSource=hc.getAttribute('highcharts-source');
  const highchartsWrapper = getFirstAncestorByClass(hc, 'sc-highcharts-wrapper')
  fetch(chartSource)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(jsonContent => {
      Highcharts[chartType](hc.id, JSON.parse(jsonContent))
    })
    .then(() => highchartsWrapper.classList.toggle('is-loading', false))
    .catch((error) => {
      const ed = document.createElement('div');
      ed.classList.add('sc-alert', 'sc-alert-error');
      ed.innerHTML = error;
      ed.id = hc.id;
      highchartsWrapper.classList.toggle('is-loading', false);
      highchartsWrapper.insertAdjacentElement('afterbegin', ed);
    });
}
