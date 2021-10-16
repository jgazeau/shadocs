Cypress.Commands.add('desktopShortcutsBeforeEach', () => {
  cy.visit(Cypress.env('SITEMAP_URL'))
  cy.viewportDesktop()
})