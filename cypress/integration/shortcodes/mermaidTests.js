describe('for: mermaid shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_URL') + Cypress.env('SC_MERMAID_URL'))
  })
  it('one mermaid should be displayed', () => {
    cy.get('#content .sc-mermaid-wrapper > .sc-mermaid-container')
      .should('have.length', 1)
  })
  it('mermaid should be visible', () => {
    cy.get('#content .sc-mermaid-wrapper > .sc-mermaid-container')
      .each(($elem) => {
        cy.get($elem)
          .scrollIntoView()
          .should('be.visible')
      })
  })
  it('mermaid should have a loading helper', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container')
      .should('have.class', 'is-loading')
  })
  it('mermaid should not have a loading helper once loaded', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container')
      .should('not.have.class', 'is-loading')
  })
  it('mermaid should contain one svg with corresponding id', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container')
      .each(($scCont) => {
        cy.get($scCont)
          .should('not.have.class', 'is-loading')
          .find('.sc-mermaid-container > .sc-mermaid').as('mermaidData')
          .each(($elem) => {
            let elId = $elem[0].id;
            cy.get('@mermaidData')
              .find('svg')
              .should('have.length', 1)
              .should('have.id', elId + '-svg')
          })
      })
  })
  it('mermaid should contain one export and one reload button', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container')
      .each(($scCont) => {
        cy.get($scCont)
          .should('not.have.class', 'is-loading')
          .find('.sc-mermaid-container > .sc-mermaid').as('mermaidData')
          .each(($elem) => {
            let elId = $elem[0].id;
            cy.get('@mermaidData')
              .find('#' + elId + '-export-svg')
              .should('have.length', 1)
            cy.get('@mermaidData')
              .find('#' + elId + '-reload')
              .should('have.length', 1)
          })
      })
  })
  it('mermaid should open modal containing svg when clicked', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container')
      .each(($scCont) => {
        cy.get($scCont)
          .should('not.have.class', 'is-loading')
          .find('.sc-mermaid-container > .sc-mermaid')
          .each(($elem) => {
            let elId = $elem[0].id;
            cy.get('#' + elId + '-svg')
              .scrollIntoView()
              .click({force:true})
            cy.get('#modalContainer #modal #' + elId + '-svg')
              .should('be.visible')
          })
      })
  })
  // For now local download is not fully supported in firefox browser.
  // Cypress doesn't seems to accept browser preferences in headless mode.
  // https://github.com/cypress-io/cypress/issues/8814
  it.only('export button should export mermaid', {browser:'!firefox'}, () => {
    const path = require('path');
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container')
      .each(($scCont) => {
        cy.get($scCont)
          .should('not.have.class', 'is-loading')
          .find('.sc-mermaid-container > .sc-mermaid')
          .each(($elem) => {
            const elId = $elem[0].id;
            cy.get('#' + elId + '-svg')
              .then(($svg) => {
                $svg[0].removeAttribute('class');
                cy.get('#' + elId + '-export-svg')
                  .scrollIntoView()
                  .click({force:true})
                cy.readFile(path.join(Cypress.config('downloadsFolder'), elId + '.svg'))
                  .should('be.equal', $svg[0].outerHTML)
              })
          })
      })
  })
  it('reload button should reload mermaid', () => {
    cy.get('#content .sc-mermaid-wrapper.helper-loading-container')
      .each(($scCont) => {
        cy.get($scCont).as('scCont')
          .should('not.have.class', 'is-loading')
          .find('.sc-mermaid-container > .sc-mermaid')
          .each(($elem) => {
            let elId = $elem[0].id;
            cy.get('#' + elId + '-reload')
              .scrollIntoView()
              .click({force:true})
            cy.get('@scCont')
              .should('have.class', 'is-loading')
            cy.get('@scCont')
              .should('not.have.class', 'is-loading')
          })
      })
  })
})