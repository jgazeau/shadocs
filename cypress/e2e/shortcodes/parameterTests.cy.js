describe('for: parameter shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_PARAMETER_PATH'));
  });
  it('seven parameters should be displayed', () => {
    cy.get('#content .sc-parameter').should('have.length', 7);
  });
  it('parameters should be visible', () => {
    cy.get('#content .sc-parameter').each(($elem) => {
      cy.get($elem).scrollIntoView().should('be.visible');
    });
  });
});
