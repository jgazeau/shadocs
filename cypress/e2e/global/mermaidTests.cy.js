describe('for: mermaid', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('FUNC_MERMAID_PATH'));
  });
  it('one mermaid should be displayed', () => {
    cy.get('#content .mermaid-wrapper > .mermaid-container').should(
      'have.length',
      1
    );
  });
  it('mermaid should be visible', () => {
    cy.get('#content .mermaid-wrapper > .mermaid-container').each(
      ($elem) => {
        cy.get($elem).scrollIntoView().should('be.visible');
      }
    );
  });
  it('mermaid should not have a loader once loaded', () => {
    cy.get('#content .mermaid-wrapper.loader-container').should(
      'not.have.class',
      'is-loading'
    );
  });
  it('mermaid should contain one svg with corresponding id', () => {
    cy.get('#content .mermaid-wrapper.loader-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-svg').should('have.length', 1);
      }
    );
  });
  it('mermaid should contain one export button', () => {
    cy.get('#content .mermaid-wrapper.loader-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-export-svg').should('have.length', 1);
      }
    );
  });
  it('mermaid should open modal containing svg when clicked', () => {
    cy.get('#content .mermaid-wrapper.loader-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-svg')
          .scrollIntoView()
          .click({ force: true });
        cy.get('#modalContainer #modalWrapper #' + elId + '-svg').should('be.visible');
      }
    );
  });
  it('export button should export mermaid', { browser: '!firefox' }, () => {
    const path = require('path');
    cy.get('#content .mermaid-wrapper.loader-container').each(
      ($elem) => {
        let elId = $elem[0].id;
        cy.get('#' + elId + '-svg').then(($svg) => {
          $svg[0].classList.remove('mermaid-svg', 'is-modal');
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
