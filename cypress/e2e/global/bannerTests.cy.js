for (const bannerUrl of Cypress.env('FUNC_BANNER_PATHS')) {
  describe('for: table of content of ' + bannerUrl, () => {
    beforeEach(() => {
      cy.visit(bannerUrl);
    });
    it('at least one banner should be displayed', () => {
      cy.get('#content .banner').should('have.length.at.least', 1);
    });
    it('banner should be displayed', () => {
      cy.get('#content .banner').should('be.visible');
    });
  });
}
