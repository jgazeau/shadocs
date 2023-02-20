describe('for: multilingual', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('HOMEPAGE_URL'));
  });
  it('sitemap.xml should have 2 entries', () => {
    cy.request(Cypress.env('SITEMAP_XML_PATH'))
      .its('body')
      .then((sitemapindex) => {
        const parser = new DOMParser();
        const xmlSitemapindex = parser.parseFromString(
          sitemapindex,
          'text/xml'
        );
        expect(xmlSitemapindex.getElementsByTagName('sitemap')).to.have.length(
          2
        );
      });
  });
  it('languages sitemap.xml should have the same number of url', () => {
    cy.request(Cypress.env('SITEMAP_XML_PATH'))
      .its('body')
      .then((sitemapindex) => {
        const parser = new DOMParser();
        const sitemaps = parser
          .parseFromString(sitemapindex, 'text/xml')
          .getElementsByTagName('sitemap');
        cy.request(
          sitemaps[0].getElementsByTagName('loc')[0].childNodes[0].nodeValue
        )
          .its('body')
          .then(
            (urlset) =>
              parser
                .parseFromString(urlset, 'text/xml')
                .getElementsByTagName('url').length
          )
          .then((urlCount) => {
            for (let sitemap of sitemaps) {
              cy.request(
                sitemap.getElementsByTagName('loc')[0].childNodes[0].nodeValue
              )
                .its('body')
                .then((urlset) =>
                  parser
                    .parseFromString(urlset, 'text/xml')
                    .getElementsByTagName('url')
                )
                .should((urlset) => {
                  expect(urlset.length).to.equal(urlCount);
                })
                .then((urlset) => {
                  for (let url of urlset) {
                    cy.request(
                      url.getElementsByTagName('loc')[0].childNodes[0].nodeValue
                    );
                  }
                });
            }
          });
      });
  });
});
