describe('for: content', () => {
  beforeEach(() => {
    cy.env(['FUNC_TOC_PATH']).then(({ FUNC_TOC_PATH }) => {
      cy.visit(FUNC_TOC_PATH);
    });
  });
  it('all titles should have anchors', () => {
    cy.get('#content')
      .children('h1,h2,h3,h4,h5,h6')
      .each(($title) => {
        cy.get($title[0])
          .children('a[href="#' + encodeURI($title[0].id).toLowerCase() + '"]')
          .should('have.class', 'anchor');
      });
  });
  it('all anchors should redirect to appropriate URL', () => {
    cy.env(['HOMEPAGE_URL', 'FUNC_TOC_PATH']).then(
      ({ HOMEPAGE_URL, FUNC_TOC_PATH }) => {
        cy.get('#content')
          .children('h1,h2,h3,h4,h5,h6')
          .each(($title) => {
            cy.get($title[0])
              .children(
                'a[href="#' + encodeURI($title[0].id).toLowerCase() + '"]',
              )
              .should('have.class', 'anchor')
              .click({ force: true });
            cy.location('href').should(
              'eq',
              HOMEPAGE_URL +
                FUNC_TOC_PATH +
                '#' +
                encodeURI($title[0].id).toLowerCase(),
            );
          });
      },
    );
  });
});
