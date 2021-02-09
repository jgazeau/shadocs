describe('for: table of content', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('THEME_URL'))
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
    cy.visit(Cypress.env('TERM_URL'))
    cy.get('#tocContainer')
      .should('not.exist')
  })
  it('toc should not be displayed on taxonomy pages', () => {
    cy.visit(Cypress.env('TAXONOMY_URL'))
    cy.get('#tocContainer')
      .should('not.exist')
  })
  it('toc should contain all titles and they should be visible', () => {
    cy.get('h1')
      .each(($title) => {
        cy.get('#tocContainer a[href="#' + $title[0].id + '"]')
          .should('be.visible')
      })
  })
})