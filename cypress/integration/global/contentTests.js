describe('for: content', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('FUNC_TOC_URL'))
  })
  it('all titles should have anchors', () => {
    cy.get('#content')
      .children('h1,h2,h3,h4,h5,h6')
      .each(($title) => {
        cy.get($title[0])
          .children('a[href="#' + encodeURI($title[0].id).toLowerCase() + '"]')
          .should('have.class', 'anchor')
      })
  })
  it('all anchors should redirect to appropriate URL', () => {
    cy.get('#content')
      .children('h1,h2,h3,h4,h5,h6')
      .each(($title) => {
        cy.get($title[0])
          .children('a[href="#' + encodeURI($title[0].id).toLowerCase() + '"]')
          .should('have.class', 'anchor')
          .click({force:true})
        cy.location()
          .should((loc) => {
            expect(loc.hash).to.eq('#' + encodeURI($title[0].id).toLowerCase())
            expect(loc.pathname).to.eq(Cypress.env('FUNC_TOC_URL'))
          })
      })
  })
})