// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('viewportDesktop', ($size) => {
  if ($size === 'min')
    cy.viewport(Cypress.env('VIEWPORT_DESKTOP_MINWIDTH'), Cypress.env('VIEWPORT_COMMON_HEIGHT'), true)
  else
    cy.viewport(Cypress.env('VIEWPORT_DESKTOP_MAXWIDTH'), Cypress.env('VIEWPORT_COMMON_HEIGHT'), true)
})
Cypress.Commands.add('viewportTouch', ($size) => {
  if ($size === 'min')
    cy.viewport(Cypress.env('VIEWPORT_TOUCH_MINWIDTH'), Cypress.env('VIEWPORT_COMMON_HEIGHT'), true)
  else
    cy.viewport(Cypress.env('VIEWPORT_TOUCH_MAXWIDTH'), Cypress.env('VIEWPORT_COMMON_HEIGHT'), true)
})
Cypress.Commands.add('viewportMobile', ($size) => {
  if ($size === 'min')
    cy.viewport(Cypress.env('VIEWPORT_MOBILE_MINWIDTH'), Cypress.env('VIEWPORT_COMMON_HEIGHT'), true)
  else
    cy.viewport(Cypress.env('VIEWPORT_MOBILE_MAXWIDTH'), Cypress.env('VIEWPORT_COMMON_HEIGHT'), true)
})
Cypress.Commands.add('toggleSidebar', ($force, $noTransition) => {
  cy.window()
    .then((window) => window.toggleSidebar($force, $noTransition))
})
Cypress.Commands.add('toggleSidebarEntries', ($force) => {
  cy.window()
    .then((window) => window.toggleSidebarEntries($force))
})
Cypress.Commands.add('disableSmoothScroll', () => {
  cy.window()
    .then((window) => window.disableSmoothScroll())
})
Cypress.Commands.add('scrollAndClickElem', ($elem) => {
  cy.get($elem)
    .scrollIntoView()
    .click({force:true})
})
Cypress.Commands.add('scrollAndClick', {prevSubject:true}, ($elem) => {
  cy.wrap($elem)
    .scrollIntoView()
    .click({force:true})
})