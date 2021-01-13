import {
  atou,
  addFunctionToResizeEvent,
  getTriggers
} from '../theme/modules/helpers.min.js'

// VARS //
const INTRO_STEPS = 'steps';
const INTRO_EXIT_BOOL = 'isExiting';
const INTRO_TRIGGER_ONLY = 'triggeronly';
const INTRO_TRIGGER_EXCEPT = 'triggerexcept';
const INTRO_THEME_FUNCTIONS = {
  oncomplete:     { applyOnStep: false },
  onexit:         { applyOnStep: false },
  onbeforeexit:   { applyOnStep: false },
  onchange:       { applyOnStep: true },
  onbeforechange: { applyOnStep: true },
  onafterchange:  { applyOnStep: true }
}
const themeCommonOptions = {
  nextLabel:          introNextLabel,
  prevLabel:          introPrevLabel,
  skipLabel:          introSkipLabel,
  doneLabel:          introDoneLabel,
  hidePrev:           false,
  hideNext:           false,
  nextToDone:         true,
  exitOnEsc:          true,
  exitOnOverlayClick: true,
  showStepNumbers:    false,
  keyboardNavigation: true,
  showButtons:        true,
  showBullets:        true,
  showProgress:       true,
  scrollToElement:    true,
  scrollTo:           "element",
  scrollPadding:      30,
  overlayOpacity:     0.8,
  disableInteraction: true
};
const introErrorStep = {
  showBullets: false,
  steps: [{
    title: atou(document.getElementById('intro-error-title').getAttribute('data')),
    intro: atou(document.getElementById('intro-error').getAttribute('data'))
  }]
};
const introEmptyStep = {
  showBullets: false,
  steps: [{
    title: atou(document.getElementById('intro-error-title').getAttribute('data')),
    intro: atou(document.getElementById('intro-empty').getAttribute('data'))
  }]
};
// MAIN //
const divi = document.getElementsByClassName('sc-intro');
for (let i = 0; i < divi.length; i++) {
  divi[i].addEventListener('click', function() {
    let introOptions = parseIntroOptions(atou(divi[i].getAttribute('intro-data')));
    introOptions.steps = manageTriggeredSteps(introOptions.steps, getTriggers());
    let intro = introJs();
    intro.setOptions(themeCommonOptions);
    intro.setOptions(manageEmptySteps(introOptions));
    for (const key in INTRO_THEME_FUNCTIONS) {
      if (typeof intro[key] === 'function') {
        intro[key](function() {
          if (INTRO_THEME_FUNCTIONS[key].applyOnStep) {
            if (this._introItems[this.currentStep()].hasOwnProperty(key)) {
              Function(this._introItems[this.currentStep()][key])();
            }
          } else {
            if (introOptions.hasOwnProperty(key)) {
              Function(introOptions[key])();
            }
          }
        });
      }
    }
    addFunctionToResizeEvent(function exitIntro() {
      if (!intro[INTRO_EXIT_BOOL]) {
        intro.isExiting = true;
        intro.exit(true);
      }
    });
    intro.start();
  });
};
function parseIntroOptions(input) {
  try {
    let output = JSON.parse(input);
    return manageEmptySteps(output);
  } catch (error) {
    return introErrorStep;
  }
};
function manageEmptySteps(input) {
  if (input.hasOwnProperty(INTRO_STEPS) && input[INTRO_STEPS].length > 0) {
    return input;
  } else {
    return introEmptyStep;
  }
}
function manageTriggeredSteps(steps, triggers) {
  let outputSteps = [];
  for (let i = 0; i < steps.length ; i++) {
    if (keepSteps(steps[i],triggers)) {
      outputSteps[outputSteps.length] = steps[i];
    }
  }
  return outputSteps;
};
function keepSteps(step, triggers) {
  let isTriggered = true;
  if (step.hasOwnProperty(INTRO_TRIGGER_ONLY)) {
    isTriggered = false
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
