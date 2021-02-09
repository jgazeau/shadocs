Cypress.Commands.add('desktopNavbarBeforeEach', () => {
  cy.visit(Cypress.env('HOMEPAGE_URL'))
  cy.viewportDesktop()
})
Cypress.Commands.add('touchNavbarBeforeEach', () => {
  cy.visit(Cypress.env('HOMEPAGE_URL'))
  cy.viewportTouch()
  cy.toggleNavbarMenu(true)
})