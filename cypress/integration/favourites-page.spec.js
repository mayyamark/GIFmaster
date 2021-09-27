describe('Favourites page', () => {
  it('Should display the favouited gifs', () => {
    // mock 2 favourited gif ids in localStorage
    cy.setLocalStorage('favourites', 'xT1R9Zqz0hXdEf9kWY,9BGaoyWlUoJYA');

    cy.visit('http://localhost:3000/favourites');

    cy.get('[data-testid="favourited-gif"]')
      // display 2 gifs
      .should('have.length', 2)
      .first()
      .click()
      .unfavouriteGif()
      .should(() => {
        // check if the id is removed from localStorage
        expect(localStorage.getItem('favourites')).to.eq('9BGaoyWlUoJYA');
      })
      .expectElementToExist('[data-testid="modal"]')
      .expectElementToExist('[data-testid="close-modal-button"]')
      .click()
      .expectElementToNotExist('[data-testid="modal"]')
      .get('[data-testid="favourited-gif"]')
      // display 1 gif
      .should('have.length', 1);
  });

  it('Should display a link to the Random page, if no favourites are available and redirect to it, if is clicked', () => {
    cy.setLocalStorage('favourites', '');

    cy.visit('http://localhost:3000/favourites');

    cy.expectElementToNotExist('[data-testid="favourited-gif"]')
      .expectElementToExist('[data-testid="no-gifs-box"]')
      .get('a')
      .first()
      .click();

    cy.url().should('contains', '/random-gif');
  });
});
