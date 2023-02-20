describe('for: QR code', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  it('QR code should display the correct QR code', () => {
    let homeQrCode = 'homeQrCode.png';
    if (Cypress.browser.name === 'firefox') {
      homeQrCode = 'homeQrCode_firefox.png';
    }
    cy.get('#qrCodeButton').click();
    cy.get('#currentPageQrCode').then(($img) => {
      cy.fixture('qrcode/' + homeQrCode, 'base64').should(
        'be.equal',
        $img[0].src.replace(/^data:image.+;base64,/, '')
      );
    });
  });
});
