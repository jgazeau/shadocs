describe('for: highcharts shortcode', () => {
  beforeEach(() => {
    cy.env(['SC_PATH', 'SC_HIGHCHARTS_PATH']).then(
      ({ SC_PATH, SC_HIGHCHARTS_PATH }) => {
        cy.visit(SC_PATH + SC_HIGHCHARTS_PATH);
      },
    );
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  it('four highcharts should be displayed', () => {
    cy.get('#content .sc-highcharts-wrapper > .sc-highcharts-container').should(
      'have.length',
      4,
    );
  });
  it(
    'highcharts should have a loader',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .sc-highcharts-wrapper').each(($elem) => {
        cy.get($elem).scrollIntoView().should('have.class', 'loader-container');
      });
    },
  );
  it(
    'highcharts should not have a loader once loaded',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .sc-highcharts-wrapper.loader-container').each(
        ($elem) => {
          cy.get($elem).scrollIntoView().should('not.have.class', 'is-loading');
        },
      );
    },
  );
});
