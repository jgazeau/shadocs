describe('for: logo', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITEMAP_PATH'));
  });
  it('logo should be displayed', () => {
    cy.get('#globalLogo').should('be.visible');
  });
  it('logo should redirect to homepage', () => {
    cy.get('#globalLogo').click();
    cy.location('href').should('eq', Cypress.env('HOMEPAGE_URL'));
  });
});
