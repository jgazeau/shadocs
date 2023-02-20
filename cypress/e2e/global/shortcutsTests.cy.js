describe('for: shortcuts', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITEMAP_PATH'));
  });
  it('[shift+i] should open website information panel', () => {
    cy.window().its('scShowInfo');
    cy.get('body').type('{shift+i}', { delay: 0 });
    cy.scShowInfoResults();
  });
  it('[shift+k] should open shortcuts panel', () => {
    cy.window().its('scShowShortcuts');
    cy.get('body').type('{shift+k}', { delay: 0 });
    cy.scShowShortcutsResults();
  });
  it('[shift+h] should redirect to homepage', () => {
    cy.window().its('scGoHome');
    cy.get('body').type('{shift+h}', { delay: 0 });
    cy.location().should((loc) => {
      expect(loc.toString()).to.eq(Cypress.env('HOMEPAGE_URL'));
    });
  });
  it('[shift+f] should focus on search', () => {
    cy.window().its('scGoSearch');
    cy.get('body').type('{shift+f}', { delay: 0 });
    cy.get('#search').should('be.focused');
  });
  it('[shift+m] should collapse sidebar when uncollapsed', () => {
    cy.window().its('scToggleSidebar').wait(Cypress.env('WAIT_FOR_ANIMATION'));
    cy.toggleSidebar(true, true);
    cy.get('body').type('{shift+m}', { delay: 0 });
    cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
  });
  it('[shift+m] should uncollapse sidebar when collapsed', () => {
    cy.window().its('scToggleSidebar').wait(Cypress.env('WAIT_FOR_ANIMATION'));
    cy.toggleSidebar(false, true);
    cy.get('body').type('{shift+m}', { delay: 0 });
    cy.get('#sidebarContainer').should('have.class', 'is-sidebar-uncollapsed');
  });
  it('[shift+t] should collapse toc when uncollapsed', () => {
    cy.window().its('scToggleToc').wait(Cypress.env('WAIT_FOR_ANIMATION'));
    cy.toggleToc(true);
    cy.get('body').type('{shift+t}', { delay: 0 });
    cy.get('#contentContainer').should('have.class', 'is-toc-collapsed');
  });
  it('[shift+t] should uncollapse toc when collapsed', () => {
    cy.window().its('scToggleToc').wait(Cypress.env('WAIT_FOR_ANIMATION'));
    cy.toggleToc(false);
    cy.get('body').type('{shift+t}', { delay: 0 });
    cy.get('#contentContainer').should('have.class', 'is-toc-uncollapsed');
  });
  it('[shift+↑] should go to the top of the page', () => {
    cy.window().its('scBackToTop');
    cy.disableSmoothScroll();
    cy.get('#contentContainer').scrollTo('bottom');
    cy.get('body').type('{shift+uparrow}', { delay: 0 });
    cy.get('#contentContainer').should('have.prop', 'scrollTop', 0);
  });
  it('[shift+↓] should go to the bottom of the page', () => {
    cy.window().its('scGoToBottom');
    cy.disableSmoothScroll();
    cy.get('#contentContainer').scrollTo('top');
    cy.get('body').type('{shift+downarrow}', { delay: 0 });
    cy.get('#contentContainer').then(($elem) => {
      let calcScrollHeight = $elem[0].clientHeight + $elem[0].scrollTop;
      let elScrollHeight = $elem[0].scrollHeight;
      expect(elScrollHeight).to.equal(calcScrollHeight);
    });
  });
  it('[shift+p] should open print preview', () => {
    cy.window().its('scPrint');
    cy.scPrintStub();
    cy.get('body').type('{shift+p}', { delay: 0 });
    cy.scPrintResults();
  });
  it('[escape] should close modal', () => {
    cy.window().its('scCloseModals');
    cy.get('body').type('{shift+1}').type('{esc}');
    cy.get('#modalContainer').should('be.not.visible');
  });
  it('[shift+q] should open QR code panel', () => {
    cy.window().its('scQrCode');
    cy.get('body').type('{shift+q}', { delay: 0 });
    cy.scQrCodeResults();
  });
  it('[shift+1] should open the example panel', () => {
    cy.window().its('scExample');
    cy.get('body').type('{shift+1}');
    cy.get('#modalContainer').should('be.visible');
  });
});
