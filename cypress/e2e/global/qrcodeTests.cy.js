describe('for: QR code', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  it('QR code should display the correct QR code', () => {
    cy.get('#qrCodeButton').click({ force: true });
    cy.get('#currentPageQrCode').should('be.visible');
  });
});
