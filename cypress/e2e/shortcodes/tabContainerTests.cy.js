describe('for: tab-container shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_TAB_CONTAINER_PATH'));
  });
  it('four tab-container wrapper should be displayed', () => {
    cy.get('#content .sc-tab-container-wrapper').should('have.length', 4);
  });
  it('tab-container wrapper should be visible', () => {
    cy.disableSmoothScroll();
    cy.get('#content .sc-tab-container-wrapper').each(($elem) => {
      cy.get($elem).scrollIntoView().should('be.visible');
    });
  });
  it('at least one tab-container with snippet shortcode should be displayed', () => {
    cy.get(
      '#content .sc-tab-container-wrapper .sc-tab-container .sc-snippet-wrapper',
    ).should('have.length.at.least', 1);
  });
  it('at least one tab-container with alert shortcode should be displayed', () => {
    cy.get(
      '#content .sc-tab-container-wrapper .sc-tab-container .notification',
    ).should('have.length.at.least', 1);
  });
  it('4 tab-container wrapper with 3 tabs should be displayed', () => {
    cy.get('#content .sc-tab-container-wrapper')
      .should('have.length', 4)
      .each(($elem) => {
        cy.get($elem).children('.sc-tab-label').should('have.length', 3);
      });
  });
  it('tabs should be visible when clicked', () => {
    cy.get('#content .sc-tab-container-wrapper .sc-tab-label').each(($elem) => {
      let tabContentId = $elem[0].getAttribute('for');
      cy.get($elem)
        .scrollAndClick()
        .get(`#${tabContentId}-content`)
        .should('be.visible');
    });
  });
});
