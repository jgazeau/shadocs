describe('for: 404 page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('404_PATH'));
  });
  it('link back to homepage should be displayed', () => {
    cy.get('#footer404').should('be.visible');
  });
  it('link back to homepage should redirect to homepage', () => {
    cy.get('#footer404').click();
    cy.location().should((loc) => {
      expect(loc.toString()).to.eq(Cypress.env('HOMEPAGE_URL'));
    });
  });
});
