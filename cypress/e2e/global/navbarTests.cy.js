const testCases = ['default', 'mobile'];
for (const testCase of testCases) {
  describe('for: navbar' + ' on ' + testCase, () => {
    const extendId = testCase == 'mobile' ? 'Extend' : '';
    beforeEach(() => {
      cy[testCase + 'NavbarBeforeEach']();
    });
    describe('when multilingual dropdown', () => {
      it('hover should display languages', () => {
        cy.get(`#langsSelectorContainer${extendId}`).then(($elem) => {
          $elem.get(0).classList.toggle('is-hovered', true);
        });
        cy.get(`#dropdown-menu-langs${extendId}`).should('be.visible');
      });
      it('should have 2 languages', () => {
        cy.get(`#dropdown-menu-langs${extendId} .dropdown-item`).should(
          'have.length',
          2
        );
      });
    });
    describe('when tag dropdown', () => {
      it('hover should display taxonomies', () => {
        cy.get(`#taxonomiesSelectorContainer${extendId}`).then(($elem) => {
          $elem.get(0).classList.toggle('is-hovered', true);
        });
        cy.get(`#dropdown-menu-taxonomies${extendId}`).should('be.visible');
      });
      it('should have 2 tag', () => {
        cy.get(`#dropdown-menu-taxonomies${extendId} .dropdown-item`).should(
          'have.length',
          2
        );
      });
    });
    describe('when print icon', () => {
      it('print icon should be displayed', () => {
        cy.get(`#printButton${extendId}`).should('be.visible');
      });
      it('print icon should open print preview when clicked', () => {
        cy.window().its('scPrint');
        cy.scPrintStub();
        cy.get(`#printButton${extendId}`).click();
        cy.scPrintResults();
      });
    });
    describe('when QR code icon', () => {
      it('QR code icon should be displayed', () => {
        cy.get(`#qrCodeButton${extendId}`).should('be.visible');
      });
      it('QR code icon should open QR code panel when clicked', () => {
        cy.window().its('scQrCode');
        cy.get(`#qrCodeButton${extendId}`).click();
        cy.scQrCodeResults();
      });
    });
    describe('when shortcuts icon', () => {
      it('shortcuts icon should be displayed', () => {
        cy.get(`#shortcutsInfo${extendId}`).should('be.visible');
      });
      it('shortcuts icon should open shortcuts panel when clicked', () => {
        cy.window().its('scShowShortcuts');
        cy.get(`#shortcutsInfo${extendId}`).click();
        cy.scShowShortcutsResults();
      });
    });
    describe('when information icon', () => {
      it('information icon should be displayed', () => {
        cy.get(`#siteInfo${extendId}`).should('be.visible');
      });
      it('information icon should open website information panel when clicked', () => {
        cy.window().its('scShowInfo');
        cy.get(`#siteInfo${extendId}`).click();
        cy.scShowInfoResults();
      });
    });
    describe('when versioning dropdown', () => {
      it('hover should display versions', () => {
        cy.get(`#versionsSelectorContainer${extendId}`).then(($elem) => {
          $elem.get(0).classList.toggle('is-hovered', true);
        });
        cy.get(`#dropdown-menu-versions${extendId}`).should('be.visible');
      });
      it('should have 2 versions', () => {
        cy.get(`#dropdown-menu-versions${extendId} .dropdown-item`).should(
          'have.length',
          2
        );
      });
    });
  });
}
