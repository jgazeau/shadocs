describe('for: homepage', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  it('home intro should be displayed', () => {
    cy.get('#contentHome #introHome').should('have.length', 1);
  });
  it('home intro should be visible', () => {
    cy.get('#contentHome #introHome').each(($elem) => {
      cy.get($elem).scrollIntoView().should('be.visible');
    });
  });
  it('home intro should display and follow all steps', () => {
    cy.get('#contentHome #introHome').each(($elem) => {
      cy.scrollAndClickElem($elem);
      cy.get(
        '.introjs-tooltipReferenceLayer .introjs-tooltip ul[role=tablist] li[role=presentation]'
      ).then(($bullets) => {
        for (let i = 1; i < $bullets.length; i++) {
          cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip')
            .should('exist')
            .should('be.visible');
          cy.get(
            '.introjs-tooltipReferenceLayer .introjs-button.introjs-nextbutton'
          ).scrollAndClick();
        }
      });
      cy.get(
        '.introjs-tooltipReferenceLayer .introjs-button.introjs-donebutton'
      ).scrollAndClick();
      cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip').should(
        'not.exist'
      );
    });
  });
});
