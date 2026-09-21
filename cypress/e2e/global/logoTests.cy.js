describe('for: logo', () => {
  beforeEach(() => {
    cy.env(['SITEMAP_PATH']).then(({ SITEMAP_PATH }) => {
      cy.visit(SITEMAP_PATH);
    });
  });
  it('logo should be displayed', () => {
    cy.get('#globalLogo').should('be.visible');
  });
  it('logo should redirect to homepage', () => {
    cy.get('#globalLogo').click({ force: true });
    cy.env(['HOMEPAGE_URL']).then(({ HOMEPAGE_URL }) => {
      cy.location('href').should('eq', HOMEPAGE_URL);
    });
  });
});
