describe('for: burger menu', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'))
    cy.viewportTouch()
  })
  it('burger menu should be displayed by default on touch', () => {
    cy.get('#navbarBurger')
      .should('be.visible')
  })
  it('burger menu should not be displayed on desktop', () => {
    cy.viewportDesktop()
    cy.get('#navbarBurger')
      .should('not.be.visible')
  })
  it('burger menu should not be uncollapsed by default', () => {
    cy.get('#navbarBurger')
      .should('not.have.class', 'is-active')
  })
  it('burger menu should collapse', () => {
    cy.toggleNavbarMenu(true)
    cy.get('#navbarBurger')
      .click()
      .should('not.have.class', 'is-active')
  })
  it('burger menu should uncollapse', () => {
    cy.toggleNavbarMenu(false)
    cy.get('#navbarBurger')
      .click()
      .should('have.class', 'is-active')
  })
})