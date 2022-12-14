const POSTS_METADATA_FIXTURE = 'posts-metadata';

describe('Test the basic flow for opening an article', () => {
  it('Get articles list', () => {
    cy.intercept('/posts-metadata*', { fixture: POSTS_METADATA_FIXTURE, delay: 1000 });

    cy.visit('http://localhost:4000');
    cy.get('[data-cy=skeleton-item]').should('have.length', 15);


    cy.fixture(POSTS_METADATA_FIXTURE).then(posts => {
      const FIRST_POST = posts[0];
      const SECOND_POST = posts[1];
      const THIRD_POST = posts[2];

      cy.get("[data-cy=item]")
        .should('have.length', 3)
        .first()
        .as('first-post-listed');

      cy.get('@first-post-listed')
        .find('.fluid-text-medium-2')
        .should('have.text', FIRST_POST.title)
        .parent()
        .find('.fluid-text-small-1')
        .should('contain.text', FIRST_POST.subtitle);

      cy.get('@first-post-listed')
        .next()
        .find('.fluid-text-medium-2')
        .should('have.text', SECOND_POST.title)
        .parent()
        .find('.fluid-text-small-1')
        .should('be.empty');

      cy.get('@first-post-listed')
        .next()
        .next()
        .find('.fluid-text-medium-2')
        .should('have.text', THIRD_POST.title)
        .parent()
        .find('.fluid-text-small-1')
        .should('be.empty');
    });
  });

  it('Infinite Scroll', () => {
    cy.intercept('/posts-metadata*', { body: [], delay: 1000 });
    cy.scrollTo('bottom');
    cy.get('[data-cy=loading-icon]').should('exist');
    cy.get('[data-cy=loading-message]').should('exist').and('have.text', 'Loading...');
    cy.get('[data-cy=loading-content-wrapper]').should('exist').and('have.text', 'Nothing else to load');
  });

  it('Access article', () => {
    cy.intercept('/posts-metadata*', { fixture: POSTS_METADATA_FIXTURE });
    cy.intercept('/posts/*', { fixture: 'posts-by-id-marx', delay: 1000 });
    cy.get("[data-cy=item]").first().click();
    cy.get('[data-cy=loading-icon-reading]').should('exist');
  });
});