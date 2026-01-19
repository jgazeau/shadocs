describe('for: openapi shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_OPENAPI_PATH'));
  });
  it('two openapi should be displayed', () => {
    cy.get('#content .sc-openapi-wrapper > .sc-openapi-container').should(
      'have.length',
      2,
    );
  });
  it('openapi should have a loader', () => {
    cy.get('#content .sc-openapi-wrapper').should(
      'have.class',
      'loader-container',
    );
  });
  it(
    'openapi should not have a loader once loaded',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .sc-openapi-wrapper.loader-container').should(
        'not.have.class',
        'is-loading',
      );
    },
  );
  it(
    'export link should export openapi',
    { browser: '!firefox', defaultCommandTimeout: 10000 },
    () => {
      cy.get('.sc-openapi-iframe')
        .first()
        .its('0.contentDocument.body')
        .find('.information-container .link')
        .first()
        .should('have.attr', 'href')
        .then((href) => {
          cy.request({
            url: href,
            encoding: 'utf8',
          }).then((response) => {
            expect(response.status).to.eq(200);
            cy.fixture('openapi/example.yaml', 'utf8').then((expected) => {
              expect(response.body).to.eq(expected);
            });
          });
        });
    },
  );
});
