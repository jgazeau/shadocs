describe('for: table of contents', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('FUNC_TOC_PATH'));
  });
  it('toc should be uncollapsed by default on widescreen', () => {
    cy.viewportWidescreen('min');
    cy.get('#contentContainer').should('have.class', 'is-toc-uncollapsed');
    cy.get('#tocContainer').should('be.visible');
  });
  it('toc should be collapsed by default on desktop', () => {
    cy.viewportDesktop();
    cy.get('#contentContainer').should('have.class', 'is-toc-collapsed');
    cy.get('#tocContainer').should('not.be.visible');
  });
  it('toc should be collapsed by default on touch', () => {
    cy.viewportTouch();
    cy.get('#contentContainer').should('have.class', 'is-toc-collapsed');
    cy.get('#tocContainer').should('not.be.visible');
  });
  it('toc should be collapsed by default on mobile', () => {
    cy.viewportMobile();
    cy.get('#contentContainer').should('have.class', 'is-toc-collapsed');
    cy.get('#tocContainer').should('not.be.visible');
  });
  it('toc should not be displayed on homepage', () => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
    cy.get('#tocWrapper').should('not.exist');
  });
  it('toc should not be displayed on term pages', () => {
    cy.visit(Cypress.env('TERM_PATH'));
    cy.get('#tocWrapper').should('not.exist');
  });
  it('toc should not be displayed on taxonomy pages', () => {
    cy.visit(Cypress.env('TAXONOMY_PATH'));
    cy.get('#tocWrapper').should('not.exist');
  });
  it('toc should contain all titles types and they should be visible', () => {
    cy.get('#content')
      .children('h1,h2,h3,h4,h5,h6')
      .each(($title) => {
        cy.get(
          '#tocWrapper #tocContainer a[href="#' + $title[0].id + '"]'
        ).should('be.visible');
      });
  });
  it('toc should contain taxonomies', () => {
    cy.get('#tocWrapper #tocContainer #taxonomies .taxonomy')
      .should('have.length.at.least', 1)
      .should('be.visible');
  });
  describe('when toc uncollapsed', () => {
    beforeEach(() => {
      cy.toggleToc(true);
    });
    it('toc should collapse', () => {
      cy.get('#tocCollapsible').click();
      cy.get('#contentContainer').should('have.class', 'is-toc-collapsed');
      cy.get('#tocContainer').should('not.be.visible');
    });
    it('toc should collapse when resized from widescreen to desktop', () => {
      cy.viewportWidescreen('min').wait(Cypress.env('WAIT_FOR_ANIMATION'));
      cy.viewportDesktop();
      cy.get('#contentContainer').should('have.class', 'is-toc-collapsed');
      cy.get('#tocContainer').should('not.be.visible');
    });
    it('toc should collapse when resized from desktop (with toc uncollapsed) to touch', () => {
      cy.viewportDesktop('min');
      cy.toggleToc(true);
      cy.viewportTouch();
      cy.get('#contentContainer').should('have.class', 'is-toc-collapsed');
      cy.get('#tocContainer').should('not.be.visible');
    });
  });
  describe('when toc collapsed', () => {
    beforeEach(() => {
      cy.toggleToc(false);
    });
    it('toc should uncollapse', () => {
      cy.get('#tocCollapsible').click();
      cy.get('#contentContainer').should('have.class', 'is-toc-uncollapsed');
      cy.get('#tocContainer').should('be.visible');
    });
    it('toc should uncollapse when resized from desktop to widescreen', () => {
      cy.viewportDesktop().wait(Cypress.env('WAIT_FOR_ANIMATION'));
      cy.viewportWidescreen('min');
      cy.get('#contentContainer').should('have.class', 'is-toc-uncollapsed');
      cy.get('#tocContainer').should('be.visible');
    });
  });
});
