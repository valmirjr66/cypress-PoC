const POSTS_METADATA_FIXTURE = 'posts-metadata';

describe('Test the basic flow for opening an article', () => {
  it('Check Footer - Home Page', () => {

    cy.intercept('/posts-metadata*', { fixture: POSTS_METADATA_FIXTURE });
    cy.visit('http://localhost:4000');

    cy.get("[data-cy=footer]")
      .should('have.class', 'fluid-text-small-1')
      .should('have.text', 'This is a fake website.');
  });

  it('Check Footer - About Us Page', () => {
    cy.visit('http://localhost:4000/about-us');

    cy.get("[data-cy=footer]")
      .should('have.class', 'fluid-text-small-1')
      .should('have.text', 'This is a fake website.');
  });

  it('Check Footer - By Category Page', () => {
    cy.intercept('/posts-metadata*', { fixture: POSTS_METADATA_FIXTURE });
    cy.visit('http://localhost:4000/by-category?category=economia');

    cy.get("[data-cy=footer]")
      .should('have.class', 'fluid-text-small-1')
      .should('have.text', 'This is a fake website.');
  });

  it('Check Footer - Reading Page', () => {
    cy.intercept('/posts/*', { fixture: 'posts-by-id-marx' });
    cy.intercept('/posts-metadata*', { fixture: POSTS_METADATA_FIXTURE });
    cy.visit('http://localhost:4000/reading/a-vida-nao-e-util');

    cy.get("[data-cy=footer]")
      .should('have.class', 'fluid-text-small-1')
      .should('have.text', 'This is a fake website.');
  });
});