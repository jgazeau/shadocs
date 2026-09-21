describe('for: blockquote shortcode', () => {
  beforeEach(() => {
    cy.env(['SC_PATH', 'SC_BLOCKQUOTE_PATH']).then(
      ({ SC_PATH, SC_BLOCKQUOTE_PATH }) => {
        cy.visit(SC_PATH + SC_BLOCKQUOTE_PATH);
      },
    );
  });
  it('two blockquotes should be displayed', () => {
    cy.get('#content .sc-blockquote').should('have.length', 2);
  });
  it('one blockquote should have a source', () => {
    cy.get('#content .sc-blockquote .sc-blockquote-source').should(
      'have.length',
      1,
    );
  });
});
