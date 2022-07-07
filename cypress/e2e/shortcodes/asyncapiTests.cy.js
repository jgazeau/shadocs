describe('for: asyncapi shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_ASYNCAPI_PATH'))
  })
  it('two asyncapi should be displayed', () => {
    cy.get('#content asyncapi-component')
      .should('have.length', 2)
  })
})