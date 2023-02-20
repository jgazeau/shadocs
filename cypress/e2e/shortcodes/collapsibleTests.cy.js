describe('for: collapsible shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_COLLAPSIBLE_PATH'));
  });
  it('two collapsibles should be displayed', () => {
    cy.get('#content .sc-collapsible-container').should('have.length', 2);
  });
  it('collapsibles should have a header and a content', () => {
    cy.get('#content .sc-collapsible-container').each(($elem) => {
      cy.get($elem).children('.sc-collapsible-header').should('have.length', 1);
      cy.get($elem)
        .children('.sc-collapsible-content')
        .should('have.length', 1);
    });
  });
  it('collapsibles should be uncollapsed by default', () => {
    cy.get('#content .sc-collapsible-container').each(($elem) => {
      cy.get($elem)
        .children('.sc-collapsible-header')
        .should('not.have.class', 'sc-uncollapsed');
    });
  });
  it('collapsibles should uncollapse when clicked', () => {
    cy.get('#content .sc-collapsible-container').each(($elem) => {
      cy.get($elem)
        .scrollIntoView()
        .children('.sc-collapsible-header')
        .wait(Cypress.env('WAIT_FOR_ANIMATION'))
        .click({ force: true })
        .should('have.class', 'sc-uncollapsed');
      cy.get($elem).children('.sc-collapsible-content').should('be.visible');
    });
  });
});
