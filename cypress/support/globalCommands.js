// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('viewportWidescreen', ($size) => {
  if ($size === 'min')
    cy.env([
      'VIEWPORT_WIDESCREEN_MINWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_WIDESCREEN_MINWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(
          VIEWPORT_WIDESCREEN_MINWIDTH,
          VIEWPORT_COMMON_HEIGHT,
          true,
        ).wait(WAIT_FOR_ANIMATION);
      },
    );
  else
    cy.env([
      'VIEWPORT_WIDESCREEN_MAXWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_WIDESCREEN_MAXWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(
          VIEWPORT_WIDESCREEN_MAXWIDTH,
          VIEWPORT_COMMON_HEIGHT,
          true,
        ).wait(WAIT_FOR_ANIMATION);
      },
    );
});
Cypress.Commands.add('viewportDesktop', ($size) => {
  if ($size === 'min')
    cy.env([
      'VIEWPORT_DESKTOP_MINWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_DESKTOP_MINWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(
          VIEWPORT_DESKTOP_MINWIDTH,
          VIEWPORT_COMMON_HEIGHT,
          true,
        ).wait(WAIT_FOR_ANIMATION);
      },
    );
  else
    cy.env([
      'VIEWPORT_DESKTOP_MAXWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_DESKTOP_MAXWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(
          VIEWPORT_DESKTOP_MAXWIDTH,
          VIEWPORT_COMMON_HEIGHT,
          true,
        ).wait(WAIT_FOR_ANIMATION);
      },
    );
});
Cypress.Commands.add('viewportTouch', ($size) => {
  if ($size === 'min')
    cy.env([
      'VIEWPORT_TOUCH_MINWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_TOUCH_MINWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(VIEWPORT_TOUCH_MINWIDTH, VIEWPORT_COMMON_HEIGHT, true).wait(
          WAIT_FOR_ANIMATION,
        );
      },
    );
  else
    cy.env([
      'VIEWPORT_TOUCH_MAXWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_TOUCH_MAXWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(VIEWPORT_TOUCH_MAXWIDTH, VIEWPORT_COMMON_HEIGHT, true).wait(
          WAIT_FOR_ANIMATION,
        );
      },
    );
});
Cypress.Commands.add('viewportMobile', ($size) => {
  if ($size === 'min')
    cy.env([
      'VIEWPORT_MOBILE_MINWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_MOBILE_MINWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(
          VIEWPORT_MOBILE_MINWIDTH,
          VIEWPORT_COMMON_HEIGHT,
          true,
        ).wait(WAIT_FOR_ANIMATION);
      },
    );
  else
    cy.env([
      'VIEWPORT_MOBILE_MAXWIDTH',
      'VIEWPORT_COMMON_HEIGHT',
      'WAIT_FOR_ANIMATION',
    ]).then(
      ({
        VIEWPORT_MOBILE_MAXWIDTH,
        VIEWPORT_COMMON_HEIGHT,
        WAIT_FOR_ANIMATION,
      }) => {
        cy.viewport(
          VIEWPORT_MOBILE_MAXWIDTH,
          VIEWPORT_COMMON_HEIGHT,
          true,
        ).wait(WAIT_FOR_ANIMATION);
      },
    );
});
Cypress.Commands.add('toggleColorMode', ($force) => {
  cy.window().then((window) => window.toggleColorMode($force));
});
Cypress.Commands.add('toggleSidebar', ($force, $noTransition) => {
  cy.window().then((window) => window.toggleSidebar($force, $noTransition));
});
Cypress.Commands.add('toggleSidebarEntries', ($force) => {
  cy.window().then((window) => window.toggleSidebarEntries($force));
});
Cypress.Commands.add('toggleToc', ($force) => {
  cy.window().then((window) => window.toggleToc($force));
});
Cypress.Commands.add('disableSmoothScroll', () => {
  cy.window().then((window) => window.disableSmoothScroll());
});
Cypress.Commands.add(
  'scrollAndClick',
  { prevSubject: 'optional' },
  ($elem, force = true) => {
    cy.disableSmoothScroll();
    cy.get($elem).scrollIntoView();
    cy.get($elem).click({ force: force });
  },
);
Cypress.Commands.add('allowClipBoardAndFocus', () => {
  cy.wrap(
    Cypress.automation('remote:debugger:protocol', {
      command: 'Browser.grantPermissions',
      params: {
        permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
        origin: window.location.origin,
      },
    }),
  );
  cy.window().focus();
});
Cypress.Commands.add('assertJsonValueFromClipboard', (value) => {
  cy.window()
    .then(
      (win) =>
        new Cypress.Promise((resolve, reject) =>
          win.navigator.clipboard.readText().then(resolve).catch(reject),
        ),
    )
    .then((clipboard) => {
      return clipboard;
    })
    .should('deep.equal', value);
});
Cypress.Commands.add('clickWithoutDownload', ($elem) => {
  $elem[0].addEventListener('click', (e) => e.preventDefault(), { once: true });
  $elem[0].click({ force: true });
});
Cypress.Commands.add('cssVar', (cssVarName) => {
  return cy.document().then((doc) => {
    return window
      .getComputedStyle(doc.body)
      .getPropertyValue(cssVarName)
      .trim();
  });
});
