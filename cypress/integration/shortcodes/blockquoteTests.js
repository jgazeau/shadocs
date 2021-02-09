describe('for: blockquote shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_URL') + Cypress.env('SC_BLOCKQUOTE_URL'))
  })
  it('two blockquotes should be displayed', () => {
    cy.get('#content .sc-blockquote')
      .should('have.length', 2)
  })
  it('one blockquote should have a source', () => {
    cy.get('#content .sc-blockquote .sc-blockquote-source')
      .should('have.length', 1)
  })
})