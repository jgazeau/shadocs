import {
  atou,
  addFunctionToResizeEvent,
  getTriggers,
  disableSmoothScroll,
} from '../theme/modules/helpers.min.js';

// VARS //
const INTRO_STEPS = 'steps';
const INTRO_EXIT_BOOL = 'isExiting';
const INTRO_TRIGGER_ONLY = 'triggeronly';
const INTRO_TRIGGER_EXCEPT = 'triggerexcept';
const INTRO_THEME_FUNCTIONS = {
  oncomplete: {
    applyOnStep: false,
    callBack: '',
  },
  onexit: {
    applyOnStep: false,
    callBack: 'enableSmoothScroll();',
  },
  onbeforeexit: {
    applyOnStep: false,
    callBack: '',
  },
  onchange: {
    applyOnStep: true,
    callBack: '',
  },
  onbeforechange: {
    applyOnStep: true,
    callBack: '',
  },
  onafterchange: {
    applyOnStep: true,
    callBack: '',
  },
};
const themeCommonOptions = {
  nextLabel: introNextLabel,
  prevLabel: introPrevLabel,
  skipLabel: introSkipLabel,
  doneLabel: introDoneLabel,
  hidePrev: false,
  hideNext: false,
  nextToDone: true,
  exitOnEsc: true,
  exitOnOverlayClick: true,
  showStepNumbers: false,
  keyboardNavigation: true,
  showButtons: true,
  showBullets: true,
  showProgress: true,
  scrollToElement: true,
  scrollTo: 'element',
  scrollPadding: 30,
  overlayOpacity: 0.8,
  disableInteraction: true,
};
const introErrorTitle = atou(
  document.getElementById('intro-error-title').getAttribute('data')
);
const introError = atou(
  document.getElementById('intro-error').getAttribute('data')
);
const introEmpty = atou(
  document.getElementById('intro-empty').getAttribute('data')
);
const introErrorStep = {
  showBullets: false,
  steps: [
    {
      title: introErrorTitle,
      intro: introError,
    },
  ],
};
const introEmptyStep = {
  showBullets: false,
  steps: [
    {
      title: introErrorTitle,
      intro: introEmpty,
    },
  ],
};
// MAIN //
const divi = document.getElementsByClassName('sc-intro');
for (let i = 0; i < divi.length; i++) {
  divi[i].addEventListener('click', function () {
    disableSmoothScroll();
    let introOptions = parseIntroOptions(
      atou(divi[i].getAttribute('intro-data'))
    );
    introOptions.steps = manageTriggeredSteps(
      introOptions.steps,
      getTriggers()
    );
    let intro = introJs();
    intro.setOptions(themeCommonOptions);
    intro.setOptions(manageEmptySteps(introOptions));
    for (const key in INTRO_THEME_FUNCTIONS) {
      if (typeof intro[key] === 'function') {
        intro[key](function () {
          if (INTRO_THEME_FUNCTIONS[key].applyOnStep) {
            Function(INTRO_THEME_FUNCTIONS[key].callBack)();
            if (this._introItems[this.currentStep()].hasOwnProperty(key)) {
              Function(this._introItems[this.currentStep()][key])();
            }
          } else {
            Function(INTRO_THEME_FUNCTIONS[key].callBack)();
            if (introOptions.hasOwnProperty(key)) {
              Function(introOptions[key])();
            }
          }
        });
      }
    }
    const exitIntro = function () {
      if (!intro[INTRO_EXIT_BOOL]) {
        intro.isExiting = true;
        intro.exit(true);
      }
    };
    addFunctionToResizeEvent(exitIntro);
    intro.start();
  });
}
function parseIntroOptions(input) {
  try {
    let output = JSON.parse(input);
    return manageElements(manageEmptySteps(output));
  } catch (error) {
    introErrorStep.steps[0].intro = introError;
    return introErrorStep;
  }
}
function manageElements(input) {
  for (let i = 0; i < input.steps.length; i++) {
    if (input.steps[i].element) {
      try {
        input.steps[i].element = document.querySelector(input.steps[i].element);
      } catch {
        try {
          input.steps[i].element = Function(
            'return ' + input.steps[i].element
          )();
        } catch {
          introErrorStep.steps[0].intro =
            introError + `<br><i>(Step${i}:${input.steps[i].element})</i>`;
          return introErrorStep;
        }
      }
    }
  }
  return input;
}
function manageEmptySteps(input) {
  if (input.hasOwnProperty(INTRO_STEPS) && input[INTRO_STEPS].length > 0) {
    return input;
  } else {
    return introEmptyStep;
  }
}
function manageTriggeredSteps(steps, triggers) {
  let outputSteps = [];
  for (let i = 0; i < steps.length; i++) {
    if (keepSteps(steps[i], triggers)) {
      outputSteps[outputSteps.length] = steps[i];
    }
  }
  return outputSteps;
}
function keepSteps(step, triggers) {
  let isTriggered = true;
  if (step.hasOwnProperty(INTRO_TRIGGER_ONLY)) {
    isTriggered = false;
    for (const trigger of step[INTRO_TRIGGER_ONLY]) {
      if (triggers.includes(trigger)) {
        isTriggered = true;
        break;
      }
    }
  }
  if (step.hasOwnProperty(INTRO_TRIGGER_EXCEPT)) {
    for (const trigger of step[INTRO_TRIGGER_EXCEPT]) {
      if (triggers.includes(trigger)) {
        isTriggered = false;
        break;
      }
    }
  }
  return isTriggered;
}
