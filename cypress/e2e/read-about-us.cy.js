const DEFAULT_ABOUT_US_SECTION_TEXT = "Praesent augue leo, fermentum in justo eu, hendrerit viverra nunc. Ut vel mollis sapien. Donec sit amet urna porta, faucibus erat eget, egestas urna. Aliquam dapibus magna a nulla mollis varius. Pellentesque ut imperdiet odio. Maecenas elementum metus et nisl aliquam, eu ullamcorper mauris rutrum. Integer posuere elit quis eros pretium dictum.";

describe('Test the basic flow for opening About Us tab', () => {
  beforeEach(() => {
    cy.intercept(
      {
        url: 'https://my.api.mockaroo.com/**',
        middleware: true,
      },
      (req) => {
        req.on('response', (res) => {
          res.setDelay(1000);
        })
      }
    );
  });

  it('Get articles list', () => {
    cy.intercept('/posts-metadata*', []);
    cy.visit('http://localhost:4000');

    cy.get("[data-cy=menu-bar]")
      .should('exist')
      .children()
      .contains('About Us')
      .should('exist');
  });

  it('Access "About Us" page', () => {
    cy.get("[data-cy=menu-bar]").children().contains('About Us').click();

    cy.get("[data-cy=about-us-section]")
      .should('exist')
      .children()
      .should('have.length', 3)
      .first()
      .as('first-about-us-section');

    cy.get('@first-about-us-section')
      .should('have.css', 'background-color', Cypress.env('cssVars')['--cor-secundaria'])
      .should('have.text', DEFAULT_ABOUT_US_SECTION_TEXT)
      .next()
      .should('have.css', 'background-color', Cypress.env('cssVars')['--cor-vermelho-claro'])
      .should('have.text', DEFAULT_ABOUT_US_SECTION_TEXT)
      .next()
      .should('have.css', 'background-color', Cypress.env('cssVars')['--cor-verde'])
      .should('have.text', DEFAULT_ABOUT_US_SECTION_TEXT);
  });
});