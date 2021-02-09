describe('for: pagebreak shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_URL') + Cypress.env('SC_PAGEBREAK_URL'))
  })
  it('one pagebreak should be set in the page', () => {
    cy.get('#content .sc-pagebreak')
      .should('have.length', 1)
  })
  it('pagebreak should not be visible', () => {
    cy.get('#content .sc-pagebreak')
      .should('not.be.visible')
  })
})