Cypress.Commands.add('desktopSearchBeforeEach', () => {
  cy.visit(Cypress.env('HOMEPAGE_URL'))
  cy.viewportDesktop()
})
Cypress.Commands.add('touchSearchBeforeEach', () => {
  cy.visit(Cypress.env('HOMEPAGE_URL'))
  cy.viewportTouch()
  cy.toggleNavbarMenu(true)
})