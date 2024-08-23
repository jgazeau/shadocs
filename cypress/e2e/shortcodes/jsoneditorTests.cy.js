describe('for: jsoneditor shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_JSONEDITOR_PATH'));
  });
  it('five jsoneditor should be displayed', () => {
    cy.get('#content .sc-jsoneditor-wrapper > .sc-jsoneditor-container').should(
      'have.length',
      5
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
    cy.allowClipBoardAndFocus();
    cy.get('.sc-jsoneditor-wrapper .sc-jsoneditor-action-wrapper .sc-jsoneditor-copy-button')
      .first()
      .click({ force: true });
    cy.fixture('jsoneditor/example.json', 'utf8').then((fileContent) => {
      cy.assertJsonValueFromClipboard(fileContent);
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
  it('copy link should copy jsoneditor with specific post process', { browser: '!firefox', defaultCommandTimeout: 10000 }, () => {
    cy.allowClipBoardAndFocus();
    cy.get('.sc-jsoneditor-wrapper .sc-jsoneditor-container[post-process-function]~.sc-jsoneditor-action-wrapper .sc-jsoneditor-copy-button')
      .first()
      .click({ force: true });
    cy.assertJsonValueFromClipboard('An example post process JSON');
  });
  it('export link should export jsoneditor with specific post process', { browser: '!firefox', defaultCommandTimeout: 10000 }, () => {
    const path = require('path');
    cy.get('.sc-jsoneditor-wrapper .sc-jsoneditor-container[post-process-function]~.sc-jsoneditor-action-wrapper .sc-jsoneditor-download-button')
      .first()
      .click({ force: true })
      .then(($jsoneditorLink) => {
        const fileName = $jsoneditorLink[0].download;
        cy
          .readFile(path.join(Cypress.config('downloadsFolder'), fileName))
          .should('equal','An example post process JSON');
      });
  });
  it('export link should export jsoneditor with specific filename', { browser: '!firefox', defaultCommandTimeout: 10000 }, () => {
    cy.get('.sc-jsoneditor-wrapper .sc-jsoneditor-container[filename-to-download-function]~.sc-jsoneditor-action-wrapper .sc-jsoneditor-download-button')
      .first()
      .click({ force: true })
      .then(($jsoneditorLink) => {
        const fileName = $jsoneditorLink[0].download;
        expect(fileName).to.equal('exampleFile.json');
      });
  });
});
