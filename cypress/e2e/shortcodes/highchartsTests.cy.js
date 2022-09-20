describe('for: highcharts shortcode', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SC_PATH') + Cypress.env('SC_HIGHCHARTS_PATH'))
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
  it('four highcharts should be displayed', () => {
    cy.get('#content .sc-highcharts-wrapper > .sc-highcharts-container')
      .should('have.length', 4)
  })
  it('highcharts should have a loading helper', () => {
    cy.get('#content .sc-highcharts-wrapper')
      .should('have.class', 'helper-loading-container')
  })
  it('highcharts should not have a loading helper once loaded', {defaultCommandTimeout: 10000}, () => {
    cy.get('#content .sc-highcharts-wrapper.helper-loading-container')
      .should('not.have.class', 'is-loading')
  })
})