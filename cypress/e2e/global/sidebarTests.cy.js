describe('for: sidebar', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  describe('when onload', () => {
    it('sidebar should be uncollapsed by default on desktop', () => {
      cy.viewportDesktop('min');
      cy.get('#sidebarContainer').should(
        'have.class',
        'is-sidebar-uncollapsed'
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
      cy.toggleSidebar(true, true);
    });
    it('sidebar should collapse', () => {
      cy.get('#sidebarCollapse').click();
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
    it('expandable entries should expand', () => {
      cy.toggleSidebarEntries(false);
      cy.get('.is-icon-expandable').each(($elem) => {
        cy.scrollAndClickElem($elem).should('have.class', 'is-icon-expanded');
      });
    });
    it('expandable entries should shrink', () => {
      cy.toggleSidebarEntries(true);
      cy.get('.is-icon-expandable').each(($elem) => {
        cy.scrollAndClickElem($elem).should('have.class', 'is-icon-shrinked');
      });
    });
    it('sidebar should collapse when resized from desktop to touch', () => {
      cy.viewportDesktop('min').wait(Cypress.env('WAIT_FOR_ANIMATION'));
      cy.viewportTouch();
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
    it('sidebar should collapse when resized from touch (with sidebar uncollapsed) to mobile', () => {
      cy.viewportTouch('min');
      cy.toggleSidebar(true, true);
      cy.viewportMobile();
      cy.get('#sidebarContainer').should('have.class', 'is-sidebar-collapsed');
    });
  });
  describe('when sidebar collapsed', () => {
    beforeEach(() => {
      cy.toggleSidebar(false, true);
    });
    it('sidebar should uncollapse', () => {
      cy.get('#sidebarUncollapse').click();
      cy.get('#sidebarContainer').should(
        'have.class',
        'is-sidebar-uncollapsed'
      );
    });
    it('menu item should appear on hover', () => {
      cy.get('.is-fs-expandable-icon').first().trigger('mouseenter');
      cy.get('.is-fs-expandable-icon')
        .siblings('.is-expandable')
        .first()
        .should('have.class', 'is-hovered');
    });
    it('sidebar should uncollapse when resized from touch to desktop', () => {
      cy.viewportTouch().wait(Cypress.env('WAIT_FOR_ANIMATION'));
      cy.viewportDesktop('min');
      cy.get('#sidebarContainer').should(
        'have.class',
        'is-sidebar-uncollapsed'
      );
    });
  });
});
