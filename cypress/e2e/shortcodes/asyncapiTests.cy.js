describe('for: asyncapi shortcode', () => {
  beforeEach(() => {
    cy.env(['SC_PATH', 'SC_ASYNCAPI_PATH']).then(
      ({ SC_PATH, SC_ASYNCAPI_PATH }) => {
        cy.visit(SC_PATH + SC_ASYNCAPI_PATH);
      },
    );
  });
  it('two asyncapi should be displayed', () => {
    cy.get('#content asyncapi-component').should('have.length', 2);
  });
  it('asyncapi should have a loader', () => {
    cy.get('#content .sc-asyncapi-wrapper').should(
      'have.class',
      'loader-container',
    );
  });
  it(
    'asyncapi should not have a loader once loaded',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .sc-asyncapi-wrapper.loader-container').should(
        'not.have.class',
        'is-loading',
      );
    },
  );
});
