import {
  addFunctionToResizeEvent,
  getFirstAncestorByClass,
  waitFor,
} from '../theme/modules/helpers.min.js';

// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function () {
  renderAllHighcharts();
});
function renderAllHighcharts() {
  let divh = document.getElementsByClassName('sc-highcharts-container');
  for (let i = 0; i < divh.length; i++) {
    renderHighcharts(divh[i]);
  }
  manageHighchartsResize(divh);
}
function manageHighchartsResize(cc) {
  if (cc.length) {
    const resizeHighcharts = function () {
      let charts = Highcharts.charts;
      for (let i = 0; i < charts.length; i++) {
        charts[i].setSize(null, null, false);
      }
    };
    addFunctionToResizeEvent(resizeHighcharts);
    document
      .getElementById('sidebarUncollapse')
      .addEventListener('click', () => {
        setTimeout(function () {
          resizeHighcharts();
        }, 200);
      });
    document.getElementById('sidebarCollapse').addEventListener('click', () => {
      setTimeout(function () {
        resizeHighcharts();
      }, 200);
    });
    let tc = document.getElementById('tocCollapsible');
    if (tc) {
      tc.addEventListener('click', () => {
        resizeHighcharts();
      });
    }
  }
}
async function renderHighcharts(hc) {
  const highchartsWrapper = getFirstAncestorByClass(
    hc,
    'sc-highcharts-wrapper'
  );
  const highchartsPromise = new Promise((resolve) => resolve());
  await highchartsPromise
    .then(() => {
      const maximumAttempts = 10;
      const delayAttempts = 600;
      return waitForHighcharts(hc, delayAttempts, maximumAttempts).then(
        (isRenderHighcharts) => {
          if (isRenderHighcharts) {
            highchartsWrapper.classList.toggle('is-loading', false);
            return Promise.resolve();
          } else {
            throw new Error('{{- i18n "highcharts_error" -}}');
          }
        }
      );
    })
    .catch((error) => {
      const ed = document.createElement('div');
      ed.classList.add('sc-alert', 'sc-alert-error');
      ed.innerHTML = error;
      ed.id = hc.id;
      highchartsWrapper.classList.toggle('is-loading', false);
      highchartsWrapper.insertAdjacentElement('afterbegin', ed);
    });
}

function waitForHighcharts(e, delay, maxCount, count = 0) {
  count++;
  return waitFor(delay).then(() => {
    if (count < maxCount) {
      if (e.innerHTML) {
        return Promise.resolve(true);
      } else {
        return waitForHighcharts(e, delay, maxCount, count);
      }
    } else {
      return Promise.resolve(false);
    }
  });
}
