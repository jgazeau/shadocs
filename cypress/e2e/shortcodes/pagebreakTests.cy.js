describe('for: pagebreak shortcode', () => {
  beforeEach(() => {
    cy.env(['SC_PATH', 'SC_PAGEBREAK_PATH']).then(
      ({ SC_PATH, SC_PAGEBREAK_PATH }) => {
        cy.visit(SC_PATH + SC_PAGEBREAK_PATH);
      },
    );
  });
  it('one pagebreak should be set in the page', () => {
    cy.get('#content .sc-pagebreak').should('have.length', 1);
  });
  it('pagebreak should not be visible', () => {
    cy.get('#content .sc-pagebreak').should('not.be.visible');
  });
});
