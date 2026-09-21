describe('for: QR code', () => {
  beforeEach(() => {
    cy.env(['HOMEPAGE_URL']).then(({ HOMEPAGE_URL }) => {
      cy.visit(HOMEPAGE_URL);
    });
  });
  it('QR code should display the correct QR code', () => {
    cy.get('#qrCodeButton').click({ force: true });
    cy.get('#currentPageQrCode').should('be.visible');
  });
});
