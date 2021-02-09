Cypress.Commands.add('desktopShortcutsBeforeEach', () => {
  cy.visit(Cypress.env('SITEMAP_URL'))
  cy.viewportDesktop()
})
Cypress.Commands.add('touchShortcutsBeforeEach', () => {
  cy.visit(Cypress.env('SITEMAP_URL'))
  cy.viewportTouch()
  cy.toggleNavbarMenu(true)
})