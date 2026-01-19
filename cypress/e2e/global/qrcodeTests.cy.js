describe('for: QR code', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  it('QR code should display the correct QR code', () => {
    let homeQrCode = 'homeQrCode.png';
    if (Cypress.browser.name === 'firefox') {
      homeQrCode = 'homeQrCode_firefox.png';
    }
    if (Cypress.browser.name === 'chrome' || Cypress.browser.name === 'edge') {
      homeQrCode = 'homeQrCode_chrome.png';
    }
    if (Cypress.browser.name === 'electron') {
      homeQrCode = 'homeQrCode_electron.png';
    }
    cy.get('#qrCodeButton').click();
    cy.get('#currentPageQrCode').then(($img) => {
      cy.fixture('qrcode/' + homeQrCode, 'base64').should(
        'be.equal',
        $img[0].src.replace(/^data:image.+;base64,/, ''),
      );
    });
  });
});
