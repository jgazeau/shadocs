describe('for: openapi shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_URL') + Cypress.env('SC_OPENAPI_URL'))
  })
  it('two openapi should be displayed', () => {
    cy.get('#content .sc-openapi-wrapper > .sc-openapi-container')
      .should('have.length', 2)
  })
  it('openapis should be visible', {defaultCommandTimeout: 10000}, () => {
    cy.get('#content .sc-openapi-iframe')
      .each(($elem) => {
        cy.get($elem)
          .scrollIntoView()
          .should('be.visible')
      })
  })
  it('openapi should have a loading helper', () => {
    cy.get('#content .sc-openapi-wrapper.helper-loading-container')
      .should('have.class', 'is-loading')
  })
  it('openapi should not have a loading helper once loaded', {defaultCommandTimeout: 10000}, () => {
    cy.get('#content .sc-openapi-wrapper.helper-loading-container')
      .should('not.have.class', 'is-loading')
  })
  // For now local download is not fully supported in firefox browser.
  // Cypress doesn't seems to accept browser preferences in headless mode.
  // https://github.com/cypress-io/cypress/issues/8814
  it.only('export button should export mermaid', {browser:'!firefox', defaultCommandTimeout: 10000}, () => {
    const path = require('path');
    cy.get('.sc-openapi-iframe').first()
      .its('0.contentDocument')
      .its('body')
      .find('.information-container .link').first()
      .click({force:true})
      .then(($openapiLink) => {
        const fileName = $openapiLink[0].href.substring($openapiLink[0].href.lastIndexOf('/') + 1)
        console.log(fileName)
        cy.readFile(path.join(Cypress.config('downloadsFolder'), fileName)).then((fileContent) => {
          cy.fixture('openapi/example.yaml', 'utf8').should('be.equal', fileContent)
        })
    })
  })
})