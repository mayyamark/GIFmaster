describe('My uploads page', () => {
  it.only('Should display the uploaded gifs and should be possible to favourite/unfavourite them', () => {
    // mock uploaded gif id in localStorage
    cy.setLocalStorage('uploads', 'xT1R9Zqz0hXdEf9kWY');

    cy.visit('http://localhost:3000/my-uploads');

    cy.get('[data-testid="uploaded-gif"]')
      // display the gif
      .should('have.length', 1)
      .first()
      .click()
      .favouriteGif()
      .should(() => {
        // save the uploaded id in the favourites
        expect(localStorage.getItem('favourites')).to.eq('xT1R9Zqz0hXdEf9kWY');
      })
      .unfavouriteGif()
      .should(() => {
        expect(localStorage.getItem('favourites')).to.eq('');
      });
  });

  it('Should display a link to the Random page, if no uploads are available and redirect to it, if is clicked', () => {
    cy.setLocalStorage('uploads', '');

    cy.visit('http://localhost:3000/my-uploads');

    cy.expectElementToNotExist('[data-testid="uploaded-gif"]')
      .expectElementToExist('[data-testid="no-gifs-box"]')
      .get('a')
      .first()
      .click();

    cy.url().should('contains', '/random-gif');
  });
});
