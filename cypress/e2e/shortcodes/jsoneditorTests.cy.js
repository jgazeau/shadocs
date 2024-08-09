describe('for: jsoneditor shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_JSONEDITOR_PATH'));
  });
  it('two jsoneditor should be displayed', () => {
    cy.get('#content .sc-jsoneditor-wrapper > .sc-jsoneditor-container').should(
      'have.length',
      2
    );
  });
  it('jsoneditor should have a loading helper', () => {
    cy.get('#content .sc-jsoneditor-wrapper').should(
      'have.class',
      'helper-loading-container'
    );
  });
  it('jsoneditor should not have a jsoneditor helper once loaded', { defaultCommandTimeout: 10000 }, () => {
    cy.get('#content .sc-jsoneditor-wrapper.helper-loading-container').should(
      'not.have.class',
      'is-loading'
    );
  });
  it('copy link should copy jsoneditor', { browser: '!firefox', defaultCommandTimeout: 10000 }, () => {
    cy.window().focus();
    cy.get('.sc-jsoneditor-wrapper .sc-jsoneditor-action-wrapper .sc-jsoneditor-copy-button')
      .first()
      .click({ force: true })
      .then(() => {
        cy.fixture('jsoneditor/example.json', 'utf8').then((fileContent) => {
          cy.assertValueCopiedToClipboard(fileContent);
        });
      });
  });
  it('export link should export jsoneditor', { browser: '!firefox', defaultCommandTimeout: 10000 }, () => {
    const path = require('path');
    cy.get('.sc-jsoneditor-wrapper .sc-jsoneditor-action-wrapper .sc-jsoneditor-download-button')
      .first()
      .click({ force: true })
      .then(($jsoneditorLink) => {
        const fileName = $jsoneditorLink[0].download;
        cy.readFile(
          path.join(Cypress.config('downloadsFolder'), fileName)
        ).then((fileContent) => {
          cy.fixture('jsoneditor/example.json', 'utf8').should(
            'deep.equal',
            fileContent
          );
        });
      });
  });
});
