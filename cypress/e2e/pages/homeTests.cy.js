describe('for: homepage', () => {
  beforeEach(() => {
    cy.env(['HOMEPAGE_URL']).then(({ HOMEPAGE_URL }) => {
      cy.visit(HOMEPAGE_URL);
    });
  });
  it('home intro should be displayed', () => {
    cy.get('#contentHome #introHome').should('have.length', 1);
  });
  it('home intro should be visible', () => {
    cy.get('#contentHome #introHome')
      .first()
      .scrollIntoView()
      .should('be.visible');
  });
  it('home intro should display and follow all steps', () => {
    cy.get('#contentHome #introHome').first().scrollAndClick(false);
    cy.env(['MAX_ANIMATION_TIMEOUT']).then(({ MAX_ANIMATION_TIMEOUT }) => {
      cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip', {
        timeout: MAX_ANIMATION_TIMEOUT,
      })
        .should('exist')
        .should('be.visible')
        .then(() => {
          cy.get(
            '.introjs-tooltipReferenceLayer .introjs-tooltip ul[role=tablist] li[role=presentation]',
          )
            .each(() => {
              cy.get('.introjs-tooltipReferenceLayer .introjs-tooltip')
                .should('exist')
                .should('be.visible')
                .then(() => {
                  cy.get(
                    '.introjs-tooltipReferenceLayer .introjs-button.introjs-nextbutton',
                  ).scrollAndClick(false);
                });
            })
            .then(() => {
              cy.get('.introjs-helperLayer').should('not.exist');
            });
        });
    });
  });
});
