Cypress.Commands.add('desktopShortcutsBeforeEach', () => {
  cy.visit(Cypress.env('SITEMAP_PATH'))
  cy.viewportDesktop()
})