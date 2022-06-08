describe('for: table of content', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('FUNC_TOC_PATH'))
  })
  it('toc should be displayed on desktop', () => {
    cy.viewportDesktop()
    cy.get('#tocContainer')
      .should('be.visible')
  })
  it('toc should not be displayed on touch', () => {
    cy.viewportTouch()
    cy.get('#tocContainer')
      .should('not.be.visible')
  })
  it('toc should not be displayed on mobile', () => {
    cy.viewportMobile()
    cy.get('#tocContainer')
      .should('not.be.visible')
  })
  it('toc should not be displayed on homepage', () => {
    cy.visit(Cypress.env('HOMEPAGE_URL'))
    cy.get('#tocContainer')
      .should('not.exist')
  })
  it('toc should not be displayed on term pages', () => {
    cy.visit(Cypress.env('TERM_PATH'))
    cy.get('#tocContainer')
      .should('not.exist')
  })
  it('toc should not be displayed on taxonomy pages', () => {
    cy.visit(Cypress.env('TAXONOMY_PATH'))
    cy.get('#tocContainer')
      .should('not.exist')
  })
  it('toc should contain all titles types and they should be visible', () => {
    cy.get('#content')
      .children('h1,h2,h3,h4,h5,h6')
      .each(($title) => {
        cy.get('#tocContainer a[href="#' + $title[0].id + '"]')
          .should('be.visible')
      })
  })
  it('toc should contain taxonomies', () => {
    cy.viewportDesktop()
    cy.get('#tocContainer #taxonomies .taxonomy')
      .should('have.length.at.least', 1)
      .should('be.visible')
  })
})