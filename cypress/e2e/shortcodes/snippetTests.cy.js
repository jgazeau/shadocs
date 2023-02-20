describe('for: snippet shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_SNIPPET_PATH'));
  });
  it('ten snippets wrapper should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper').should('have.length', 10);
  });
  it('snippets wrapper should be visible', () => {
    cy.get('#content .sc-snippet-wrapper').each(($elem) => {
      cy.get($elem).scrollIntoView().should('be.visible');
    });
  });
  it('at least one snippet with caption should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper .sc-snippet-caption').should(
      'have.length.at.least',
      1
    );
  });
  it('at least one md snippet should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper .sc-snippet-md').should(
      'have.length.at.least',
      1
    );
  });
  it('at least one plaintext snippet should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper .sc-snippet-plaintext').should(
      'have.length.at.least',
      1
    );
  });
  it('2 snippets wrapper with 3 tabs should be displayed', () => {
    cy.get('#content .sc-snippet-wrapper.sc-snippet-tabs')
      .should('have.length', 2)
      .each(($elem) => {
        cy.get($elem).children('.sc-snippet-label').should('have.length', 3);
      });
  });
  it('tabs should be visible when clicked', () => {
    cy.get('#content .sc-snippet-wrapper .sc-snippet-label').each(($elem) => {
      let tabContentId = $elem[0].getAttribute('for');
      cy.scrollAndClickElem($elem)
        .get(`#${tabContentId}-content`)
        .should('be.visible');
    });
  });
});
