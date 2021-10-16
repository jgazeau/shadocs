Cypress.Commands.add('desktopSearchBeforeEach', () => {
  cy.visit(Cypress.env('HOMEPAGE_URL'))
  cy.viewportDesktop()
})