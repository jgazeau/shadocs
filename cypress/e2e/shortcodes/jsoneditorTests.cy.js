describe('for: jsoneditor shortcode', { browser: '!firefox' }, () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_JSONEDITOR_PATH'));
  });
  it('five jsoneditor should be displayed', () => {
    cy.get('#content .sc-jsoneditor-wrapper .sc-jsoneditor-container').should(
      'have.length',
      5,
    );
  });
  it('jsoneditor should have a loader', () => {
    cy.get('#content .sc-jsoneditor-wrapper').should(
      'have.class',
      'loader-container',
    );
  });
  it(
    'jsoneditor should not have a jsoneditor helper once loaded',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get('#content .sc-jsoneditor-wrapper.loader-container').should(
        'not.have.class',
        'is-loading',
      );
    },
  );
  it(
    'copy link should copy jsoneditor',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.allowClipBoardAndFocus();
      cy.get(
        '.sc-jsoneditor-wrapper .sc-jsoneditor-action-wrapper .sc-jsoneditor-copy-button',
      )
        .first()
        .click({ force: true });
      cy.fixture('jsoneditor/example.json', 'utf8').then((fileContent) => {
        cy.assertJsonValueFromClipboard(fileContent);
      });
    },
  );
  it(
    'export link should export jsoneditor',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get(
        '.sc-jsoneditor-wrapper .sc-jsoneditor-action-wrapper .sc-jsoneditor-download-button',
      )
        .first()
        .then(($btn) => {
          cy.clickWithoutDownload($btn);
          cy.wrap($btn)
            .should('have.attr', 'href')
            .then((blobUrl) => {
              cy.window()
                .then((win) => {
                  return win.fetch(blobUrl).then((response) => response.text());
                })
                .then((text) => {
                  cy.fixture('jsoneditor/example.json', 'utf8').then(
                    (expected) => {
                      expect(JSON.parse(text)).to.deep.equal(
                        JSON.parse(expected),
                      );
                    },
                  );
                });
            });
        });
    },
  );
  it(
    'copy link should copy jsoneditor with specific post process',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.allowClipBoardAndFocus();
      cy.get(
        '.sc-jsoneditor-wrapper .sc-jsoneditor-container[post-process-function] .sc-jsoneditor-action-wrapper .sc-jsoneditor-copy-button',
      )
        .first()
        .click({ force: true });
      cy.assertJsonValueFromClipboard('"An example post process JSON"');
    },
  );
  it(
    'export link should export jsoneditor with specific post process',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get(
        '.sc-jsoneditor-wrapper .sc-jsoneditor-container[post-process-function] .sc-jsoneditor-action-wrapper .sc-jsoneditor-download-button',
      )
        .first()
        .then(($btn) => {
          cy.clickWithoutDownload($btn);
          cy.wrap($btn)
            .should('have.attr', 'href')
            .then((blobUrl) => {
              cy.window()
                .then((win) => {
                  return win.fetch(blobUrl).then((response) => response.text());
                })
                .then((text) => {
                  expect(text).to.equal('"An example post process JSON"');
                });
            });
        });
    },
  );
  it(
    'export link should export jsoneditor with specific filename',
    { defaultCommandTimeout: 10000 },
    () => {
      cy.get(
        '.sc-jsoneditor-wrapper .sc-jsoneditor-container[filename-to-download-function] .sc-jsoneditor-action-wrapper .sc-jsoneditor-download-button',
      )
        .first()
        .then(($btn) => {
          cy.clickWithoutDownload($btn);
          cy.wrap($btn)
            .should('have.attr', 'download')
            .then((fileName) => {
              expect(fileName).to.equal('exampleFile.json');
            });
        });
    },
  );
});
