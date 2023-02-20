describe('for: treeview shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_TREEVIEW_PATH'));
  });
  it('six treeviews should be displayed', () => {
    cy.get('#content .sc-treeview').should('have.length', 6);
  });
  it('treeviews should be visible', () => {
    cy.get('#content .sc-treeview').each(($elem) => {
      cy.get($elem).scrollIntoView().should('be.visible');
    });
  });
  it('one treeview with warning alert should be displayed', () => {
    cy.get('#content .sc-treeview .sc-alert.sc-alert-warning').should(
      'have.length',
      1
    );
  });
  it('one graph treeview should be displayed', () => {
    cy.get('#content .sc-treeview > .sc-treeview-graph').should(
      'have.length',
      1
    );
  });
  it('three tree treeviews should be displayed', () => {
    cy.get('#content .sc-treeview > .sc-treeview-tree').should(
      'have.length',
      3
    );
  });
  it('one treeview should be fully collapsed by default', () => {
    cy.get(
      '#content .sc-treeview > .sc-treeview-tree > .sc-treeview-coll.is-collapsed'
    ).should('have.length', 1);
  });
  it('uncollapsed treeview colls should collapse', () => {
    cy.get(
      '#content .sc-treeview > .sc-treeview-tree > .sc-treeview-coll:not(.is-collapsed) .sc-treeview-coll-trigger'
    ).each(($elem) => {
      cy.scrollAndClickElem($elem)
        .closest('.sc-treeview-coll')
        .should('have.class', 'is-collapsed');
    });
  });
  it('collapsed treeview colls should uncollapse', () => {
    cy.get(
      '#content .sc-treeview > .sc-treeview-tree > .sc-treeview-coll.is-collapsed .sc-treeview-coll-trigger'
    ).each(($elem) => {
      cy.scrollAndClickElem($elem)
        .closest('.sc-treeview-coll')
        .should('not.have.class', 'is-collapsed');
    });
  });
});
