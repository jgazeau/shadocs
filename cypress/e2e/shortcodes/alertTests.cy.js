describe('for: alert shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_ALERT_PATH'));
  });
  it('two info alerts should be displayed', () => {
    cy.get('#content .sc-alert.sc-alert-info').should('have.length', 2);
  });
  it('one success alert should be displayed', () => {
    cy.get('#content .sc-alert.sc-alert-success').should('have.length', 1);
  });
  it('one warning alert should be displayed', () => {
    cy.get('#content .sc-alert.sc-alert-warning').should('have.length', 1);
  });
  it('one error alert should be displayed', () => {
    cy.get('#content .sc-alert.sc-alert-error').should('have.length', 1);
  });
  it('alerts should be visible', () => {
    cy.get('#content .sc-alert').each(($elem) => {
      cy.get('#contentContainer').scrollTo(0, $elem[0].getBoundingClientRect().top,{ensureScrollable: false});
      cy.get($elem).should('be.visible');
    });
  });
});
