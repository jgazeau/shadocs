describe('for: snippet shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_SNIPPET_PATH'));
  });
  it('eight snippets wrapper should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper').should('have.length', 8);
  });
  it('snippets wrapper should be visible', () => {
    cy.disableSmoothScroll();
    cy.get('#content .sc-snippet-wrapper').each(($elem) => {
      cy.get($elem).scrollIntoView().should('be.visible');
    });
  });
  it('at least one snippet with caption should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper .sc-snippet-caption').should(
      'have.length.at.least',
      1,
    );
  });
  it('at least one md snippet should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper .sc-snippet-md').should(
      'have.length.at.least',
      1,
    );
  });
  it('at least one plaintext snippet should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper .sc-snippet-plaintext').should(
      'have.length.at.least',
      1,
    );
  });
});
