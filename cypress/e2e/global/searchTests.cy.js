describe('for: search', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  it('search should not be disabled', () => {
    cy.get('#search').should('not.be.disabled');
  });
  it('search should be empty by default', () => {
    cy.get('#search').should('have.value', '');
  });
  it('search should not modify user input', () => {
    cy.get('#search')
      .type(Cypress.env('SEARCH_TEST_INPUT'), { delay: 0 })
      .should('have.value', Cypress.env('SEARCH_TEST_INPUT'));
  });
  it('search should display elements', () => {
    cy.get('#search').type(Cypress.env('SEARCH_TEST_INPUT'), { delay: 0 });
    cy.get('#searchList')
      .children()
      .should('be.visible')
      .should('have.length.greaterThan', 0);
  });
  it('search should display elements when focused', () => {
    cy.get('#search').type(Cypress.env('SEARCH_TEST_INPUT'), { delay: 0 });
    cy.window().trigger('blur');
    cy.get('#search').focus();
    cy.get('#searchList').children().should('be.visible');
  });
  it('search should empty', () => {
    cy.get('#search')
      .type('xxx', { delay: 0 })
      .clear()
      .should('have.value', '');
  });
  it('search should display one element when no results', () => {
    cy.get('#search').type(Cypress.env('NULL_STRING'), { delay: 0 });
    cy.get('#searchList').children().should('have.length', 1);
  });
  it('search should not display elements when search for 1 char', () => {
    cy.get('#search').type('x', { delay: 0 });
    cy.get('#searchList').children().should('have.length', 0);
  });
  it('search should display elements when search for 2 char', () => {
    cy.get('#search').type('xx', { delay: 0 });
    cy.get('#searchList').children().should('have.length.greaterThan', 0);
  });
  it('search should not display elements after resize', () => {
    cy.get('#search').type(Cypress.env('SEARCH_TEST_INPUT'), { delay: 0 });
    cy.viewportMobile();
    cy.get('#searchList').children().should('not.be.visible');
  });
  it('empty search should not display elements', () => {
    cy.get('#search').clear();
    cy.get('#searchList').children().should('have.length', 0);
  });
});
