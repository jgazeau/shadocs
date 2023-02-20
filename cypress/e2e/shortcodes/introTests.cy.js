describe('for: intro shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_INTRO_PATH'));
  });
  it('one intro should be displayed', () => {
    cy.get('#content #introTest').should('have.length', 1);
  });
  it('intro should be visible', () => {
    cy.get('#content #introTest').each(($elem) => {
      cy.get($elem).scrollIntoView().should('be.visible');
    });
  });
  it('intro should open intro modal when clicked', () => {
    cy.get('#content #introTest').each(($elem) => {
      cy.scrollAndClickElem($elem);
      cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip')
        .should('exist')
        .should('be.visible');
    });
  });
  it('intro should exit when escape key is pressed', () => {
    cy.get('#content #introTest').each(($elem) => {
      cy.scrollAndClickElem($elem);
      cy.get('body').type('{esc}');
      cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip').should(
        'not.exist'
      );
    });
  });
  it('intro should exit when clicked outside of tooltip', () => {
    cy.get('#content #introTest').each(($elem) => {
      cy.scrollAndClickElem($elem);
      cy.get('.introjs-overlay').click({ force: true });
      cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip').should(
        'not.exist'
      );
    });
  });
  it('intro should exit when skipbutton clicked', () => {
    cy.get('#content #introTest').each(($elem) => {
      cy.scrollAndClickElem($elem);
      cy.get(
        '.introjs-tooltipReferenceLayer .introjs-tooltip .introjs-skipbutton'
      ).click({ force: true });
      cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip').should(
        'not.exist'
      );
    });
  });
  it('intro should exit when window resized', () => {
    cy.viewportDesktop();
    cy.get('#content #introTest').each(($elem) => {
      cy.scrollAndClickElem($elem);
      cy.viewportTouch();
      cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip').should(
        'not.exist'
      );
    });
  });
});
