const testCases = ['desktop','touch']
for (const testCase of testCases) {
  describe('for: navbarTests' + ' on ' + testCase, () => {
    beforeEach(() => {
      cy[testCase + 'NavbarBeforeEach']()
    })
    describe('when multilingual dropdown', () => {
      it('hover should display languages', () => {
        cy.get('#langsSelectorContainer')
          .then(($elem) => {
            $elem.get(0).classList.toggle('hovered', true)
          })
        cy.get('#dropdown-menu-langs')
          .should('be.visible')
      })
      it('should have 2 languages', () => {
        cy.get('#dropdown-menu-langs .dropdown-item')
          .should('have.length', 2)
      })
    })
    describe('when tag dropdown', () => {
      it('hover should display tags', () => {
        cy.get('#tagsSelectorContainer')
          .then(($elem) => {
            $elem.get(0).classList.toggle('hovered', true)
          })
        cy.get('#dropdown-menu-tags')
          .should('be.visible')
      })
      it('should have 1 tag', () => {
        cy.get('#dropdown-menu-tags .dropdown-item')
          .should('have.length', 1)
      })
    })
  })
}