describe('for: alert shortcode', () => {
  beforeEach(() => {
    cy.env(['SC_PATH', 'SC_ALERT_PATH']).then(({ SC_PATH, SC_ALERT_PATH }) => {
      cy.visit(SC_PATH + SC_ALERT_PATH);
    });
  });
  it('two info alerts should be displayed', () => {
    cy.get('#content .notification.is-info').should('have.length', 2);
  });
  it('one success alert should be displayed', () => {
    cy.get('#content .notification.is-success').should('have.length', 1);
  });
  it('one warning alert should be displayed', () => {
    cy.get('#content .notification.is-warning').should('have.length', 1);
  });
  it('one error alert should be displayed', () => {
    cy.get('#content .notification.is-danger').should('have.length', 1);
  });
  it('alerts should be visible', () => {
    cy.get('#content .notification').each(($elem) => {
      cy.get('#contentContainer').scrollTo(
        0,
        $elem[0].getBoundingClientRect().top,
        { ensureScrollable: false },
      );
      cy.get($elem).should('be.visible');
    });
  });
});
