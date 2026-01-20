describe('for: asciinema shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_ASCIINEMA_PATH'));
  });
  it(
    'two asciinema local players should be displayed',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .sc-asciinema-container').should('have.length', 2);
    },
  );
  it('asciinema local players should be visible', () => {
    cy.get('#content .sc-asciinema-container').each(($elem) => {
      cy.get('#contentContainer').scrollTo(
        0,
        $elem[0].getBoundingClientRect().top,
        { ensureScrollable: false },
      );
      cy.get($elem).should('be.visible');
    });
  });
  it(
    'one asciinema embedded player should be displayed',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .asciicast').should('have.length', 1);
    },
  );
  it('asciinema embedded players should be visible', () => {
    cy.get('#content .asciicast').each(($elem) => {
      cy.get('#contentContainer').scrollTo(
        0,
        $elem[0].getBoundingClientRect().top,
        { ensureScrollable: false },
      );
      cy.get($elem).should('be.visible');
    });
  });
});
