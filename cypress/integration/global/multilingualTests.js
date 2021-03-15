describe('for: multilingual', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'))
  })
  it('all entries in the sidebar should have its corresponding traduction', () => {
    let pathsMap = [];
    cy.get('#sidebarContainer .menu .is-expandable .card-header-title[href]')
      .each(($elem) => {
        let href = $elem[0].getAttribute("href");
        if (href) { pathsMap.push(href) }
      })
    cy.wrap(pathsMap)
      .each(($path) => {
        cy.visit($path)
          .location('pathname')
          .should('eq', $path)
        cy.visit(Cypress.env('ENGLISH_URL_PREFIX') + $path)
          .location('pathname')
          .should('eq', Cypress.env('ENGLISH_URL_PREFIX') + $path)
      })
  })
  it('all entries in the sidebar should be set properly active when visited', () => {
    let pathsMap = [];
    cy.get('#sidebarContainer .menu .is-expandable .card-header-title[href]')
      .each(($elem) => {
        let href = $elem[0].getAttribute("href");
        if (href) { pathsMap.push(href) }
      })
    cy.wrap(pathsMap)
      .each(($path) => {
        cy.visit($path)
          .location('pathname')
          .should('eq', $path)
          .get('#sidebarActiveEntry .card-header-title[href]')
          .should('have.attr', 'href', $path)
      })
  })
})