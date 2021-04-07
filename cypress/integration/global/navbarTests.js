const testCases = ['desktop','touch']
for (const testCase of testCases) {
  describe('for: navbar' + ' on ' + testCase, () => {
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
    describe('when print icon', () => {
      it('print icon should be displayed', () => {
        cy.get('#printButton')
          .should('be.visible')
      })
      it('print icon should open print preview when clicked', () => {
        cy.window().its('scPrint')
        cy.scPrintStub()
        cy.get('#printButton')
          .click()
        cy.scPrintResults()
      })
    })
    describe('when QR code icon', () => {
      it('QR code icon should be displayed', () => {
        cy.get('#qrCodeButton')
          .should('be.visible')
      })
      it('QR code icon should open QR code panel when clicked', () => {
        cy.window().its('scQrCode')
        cy.get('#qrCodeButton')
          .click()
        cy.scQrCodeResults()
      })
    })
    describe('when shortcuts icon', () => {
      it('shortcuts icon should be displayed', () => {
        cy.get('#shortcutsInfo')
          .should('be.visible')
      })
      it('shortcuts icon should open shortcuts panel when clicked', () => {
        cy.window().its('scShowShortcuts')
        cy.get('#shortcutsInfo')
          .click()
        cy.scShowShortcutsResults()
      })
    })
    describe('when information icon', () => {
      it('information icon should be displayed', () => {
        cy.get('#siteInfo')
          .should('be.visible')
      })
      it('information icon should open website information panel when clicked', () => {
        cy.window().its('scShowInfo')
        cy.get('#siteInfo')
          .click()
        cy.scShowInfoResults()
      })
    })
  })
}