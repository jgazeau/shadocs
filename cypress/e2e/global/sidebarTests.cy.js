describe('for: sidebar', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  describe('when onload', () => {
    it('sidebar should be uncollapsed by default on desktop', () => {
      cy.viewportDesktop('min');
      cy.get('#sidebarContainer').should(
        'have.class',
        'is-sidebar-uncollapsed',
      );
    });
    it('sidebar should be collapsed by default on touch', () => {
      cy.viewportTouch();
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
    it('sidebar should be collapsed by default on mobile', () => {
      cy.viewportMobile();
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
    it('sidebar entries should be shrinked by default', () => {
      cy.viewportDesktop('min');
      cy.get('.is-icon-expandable').should('have.class', 'is-icon-shrinked');
    });
    it('sidebar entries should be uncollapsed when current page is a section', () => {
      cy.visit(Cypress.env('THEME_PATH'));
      cy.viewportDesktop('min');
      cy.get('#sidebarActiveEntry').as('sidebarActiveEntry');
      cy.get('@sidebarActiveEntry')
        .parent()
        .should('have.class', 'is-entries-expanded');
      cy.get('@sidebarActiveEntry').next('ul').should('be.visible');
    });
  });
  describe('when sidebar uncollapsed', () => {
    beforeEach(() => {
      cy.viewportTouch();
      cy.toggleSidebar(true, true).wait(Cypress.env('WAIT_FOR_ANIMATION'));
    });
    it('sidebar should collapse', () => {
      cy.get('#sidebarCollapse').click({ force: true });
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
    it('expandable entries should expand', () => {
      cy.toggleSidebarEntries(false).wait(Cypress.env('WAIT_FOR_ANIMATION'));
      cy.get('.is-icon-expandable').each(($elem) => {
        cy.get($elem).scrollAndClick().should('have.class', 'is-icon-expanded');
      });
    });
    it('expandable entries should shrink', () => {
      cy.toggleSidebarEntries(true).wait(Cypress.env('WAIT_FOR_ANIMATION'));
      cy.get('.is-icon-expandable').each(($elem) => {
        cy.get($elem).scrollAndClick().should('have.class', 'is-icon-shrinked');
      });
    });
    it('sidebar should collapse when resized from desktop to touch', () => {
      cy.viewportDesktop('min');
      cy.get('#sidebarContainer').should(
        'have.class',
        'is-sidebar-uncollapsed',
      );
      cy.viewportTouch();
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
    it('sidebar should collapse when resized from touch (with sidebar uncollapsed) to mobile', () => {
      cy.viewportTouch('min');
      cy.toggleSidebar(true, true).wait(Cypress.env('WAIT_FOR_ANIMATION'));
      cy.viewportMobile();
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
  });
  describe('when sidebar collapsed', () => {
    beforeEach(() => {
      cy.viewportTouch();
      cy.toggleSidebar(false, true).wait(Cypress.env('WAIT_FOR_ANIMATION'));
    });
    it('sidebar should uncollapse', () => {
      cy.get('#sidebarUncollapse').click({ force: true });
      cy.get('#sidebarContainer').should(
        'have.class',
        'is-sidebar-uncollapsed',
      );
    });
    it('menu item should appear on hover', () => {
      cy.get('#sidebarContainer .is-fs-expandable-icon')
        .first()
        .should('be.visible')
        .trigger('mouseenter');
      cy.get('#sidebarContainer .is-fs-expandable-icon')
        .first()
        .siblings('.is-expandable')
        .first()
        .should('have.class', 'is-hovered');
    });
    it('sidebar should uncollapse when resized from touch to desktop', () => {
      cy.viewportDesktop('min');
      cy.get('#sidebarContainer').should(
        'have.class',
        'is-sidebar-uncollapsed',
      );
    });
  });
});
