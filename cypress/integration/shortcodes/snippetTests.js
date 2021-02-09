describe('for: snippet shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_URL') + Cypress.env('SC_SNIPPET_URL'))
  })
  it('fourteen snippets should be displayed', () => {
    cy.get('#content .sc-snippet-container')
      .should('have.length', 14)
  })
  it('snippets should be visible', () => {
    cy.get('#content .sc-snippet-container')
      .each(($elem) => {
        cy.get($elem)
          .scrollIntoView()
          .should('be.visible')
      })
  })
  it('three plaintext snippets should be displayed', () => {
    cy.get('#content .sc-snippet-container .sc-snippet-plaintext')
      .should('have.length', 3)
  })
  it('six snippets should have caption', () => {
    cy.get('#content .sc-snippet-container .sc-snippet .sc-snippet-caption')
      .should('have.length', 6)
  })
})