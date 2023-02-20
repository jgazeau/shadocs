describe('for: mermaid', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('FUNC_MERMAID_PATH'));
  });
  it('one mermaid should be displayed', () => {
    cy.get('#content .sc-mermaid-wrapper > .sc-mermaid-container').should(
      'have.length',
      1
    );
  });
  it('mermaid should be visible', () => {
    cy.get('#content .sc-mermaid-wrapper > .sc-mermaid-container').each(
      ($elem) => {
        cy.get($elem).scrollIntoView().should('be.visible');
      }
    );
  });
  it('mermaid should not have a loading helper once loaded', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container').should(
      'not.have.class',
      'is-loading'
    );
  });
  it('mermaid should contain one svg with corresponding id', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-svg').should('have.length', 1);
      }
    );
  });
  it('mermaid should contain one export button', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-export-svg').should('have.length', 1);
      }
    );
  });
  it('mermaid should open modal containing svg when clicked', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-svg')
          .scrollIntoView()
          .click({ force: true });
        cy.get('#modalContainer #modal #' + elId + '-svg').should('be.visible');
      }
    );
  });
  // For now local download is not fully supported in firefox browser.
  // Cypress doesn't seems to accept browser preferences in headless mode.
  // https://github.com/cypress-io/cypress/issues/8814
  it('export button should export mermaid', { browser: '!firefox' }, () => {
    const path = require('path');
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-svg').then(($svg) => {
          $svg[0].removeAttribute('class');
          cy.get('#' + elId + '-export-svg')
            .scrollIntoView()
            .click({ force: true });
          cy.readFile(
            path.join(Cypress.config('downloadsFolder'), elId + '.svg')
          ).should('be.equal', $svg[0].outerHTML);
        });
      }
    );
  });
});
