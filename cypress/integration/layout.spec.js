describe('Layout', () => {
  it('Should navigate to / when the user clicks the logo', () => {
    cy.visit('http://localhost:3000/random-gif');

    cy.get('[data-testid="logo-link"]').click().url().should('contains', '/');
  });

  it('Should display the search input in the nav bar and navigate to /search-gifs when the user triggers a search', () => {
    cy.visit('http://localhost:3000/');

    cy.expectElementToExist('[data-testid="search-input"]')
      .type('dog')
      .type('{enter}')
      .url()
      .should('contains', 'search-gifs?keyword=dog');
  });

  it('Should display the search input only in the drawer menu on mobile devices', () => {
    cy.viewport('iphone-6');

    cy.visit('http://localhost:3000/');

    cy.expectElementToNotExist('[data-testid="search-input"]')
      .get('[data-testid="open-drawer-button"]')
      .click()
      .expectElementToExist('[data-testid="search-input"]');
  });

  it('Should open and close a drawer with links to each route', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="open-drawer-button"]')
      .click()
      .expectElementToExist('[data-testid="drawer-menu"]')
      .expectElementToExist('[data-testid="my-favourites-route-link"]')
      .expectElementToExist('[data-testid="upload-route-link"]')
      .expectElementToExist('[data-testid="my-uploads-route-link"]')
      .expectElementToExist('[data-testid="random-gif-route-link"]')
      .get('[data-testid="close-drawer-button"]')
      .click()
      .expectElementToNotExist('[data-testid="drawer-menu"]');
  });
});
