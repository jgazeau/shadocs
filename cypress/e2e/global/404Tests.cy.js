describe('for: 404 page', () => {
  beforeEach(() => {
    cy.env(['404_PATH']).then(({ '404_PATH': path404 }) => {
      cy.visit(path404);
    });
  });
  it('link back to homepage should be displayed', () => {
    cy.get('#footer404').should('be.visible');
  });
  it('link back to homepage should redirect to homepage', () => {
    cy.get('#footer404').click({ force: true });
    cy.env(['HOMEPAGE_URL']).then(({ HOMEPAGE_URL }) => {
      cy.location().should((loc) => {
        expect(loc.href).to.eq(HOMEPAGE_URL);
      });
    });
  });
});
