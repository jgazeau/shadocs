describe('for: parameter shortcode', () => {
  beforeEach(() => {
    cy.env(['SC_PATH', 'SC_PARAMETER_PATH']).then(
      ({ SC_PATH, SC_PARAMETER_PATH }) => {
        cy.visit(SC_PATH + SC_PARAMETER_PATH);
      },
    );
  });
  it('seven parameters should be displayed', () => {
    cy.get('#content .sc-parameter').should('have.length', 7);
  });
  it('parameters should be visible', () => {
    cy.get('#content .sc-parameter').each(($elem) => {
      cy.get('#contentContainer').scrollTo(
        0,
        $elem[0].getBoundingClientRect().top,
        { ensureScrollable: false },
      );
      cy.get($elem).should('be.visible');
    });
  });
});
