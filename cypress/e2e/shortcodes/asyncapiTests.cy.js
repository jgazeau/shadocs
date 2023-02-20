describe('for: asyncapi shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_ASYNCAPI_PATH'));
  });
  it('two asyncapi should be displayed', () => {
    cy.get('#content asyncapi-component').should('have.length', 2);
  });
  it('asyncapi should have a loading helper', () => {
    cy.get('#content .sc-asyncapi-wrapper').should(
      'have.class',
      'helper-loading-container'
    );
  });
  it(
    'asyncapi should not have a loading helper once loaded',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .sc-asyncapi-wrapper.helper-loading-container').should(
        'not.have.class',
        'is-loading'
      );
    }
  );
});
