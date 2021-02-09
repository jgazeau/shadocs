describe('for: logoTests', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITEMAP_URL'))
  })
  it('logo should be displayed', () => {
    cy.get('#globalLogo')
      .should('be.visible')
  })
  it('logo should redirect to homepage', () => {
    cy.get('#globalLogo')
      .click()
    cy.location('pathname')
      .should('eq', Cypress.env('HOMEPAGE_URL'))
  })
})