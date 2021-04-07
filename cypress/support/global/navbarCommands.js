Cypress.Commands.add('desktopNavbarBeforeEach', () => {
  cy.visit(Cypress.env('HOMEPAGE_URL'))
  cy.viewportDesktop()
})
Cypress.Commands.add('touchNavbarBeforeEach', () => {
  cy.visit(Cypress.env('HOMEPAGE_URL'))
  cy.viewportTouch()
  cy.toggleNavbarMenu(true)
})
Cypress.Commands.add('scShowInfoResults', () => {
  cy.get('#navbarInfo')
    .should('be.visible')
})
Cypress.Commands.add('scShowShortcutsResults', () => {
  cy.get('#navbarShortcuts')
    .should('be.visible')
})
Cypress.Commands.add('scPrintStub', () => {
  cy.window()
    .then((win) => {
      cy.stub(win, 'print')
    })
})
Cypress.Commands.add('scPrintResults', () => {
  cy.window()
    .then((win) => {
      expect(win.print).to.be.calledOnce
    })
})
Cypress.Commands.add('scQrCodeResults', () => {
  cy.get('#modalContainer')
    .should('be.visible')
  cy.get('#currentPageQrCode')
    .should('be.visible')
})