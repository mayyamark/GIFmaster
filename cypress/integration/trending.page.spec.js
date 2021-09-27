describe('Trending page', () => {
  it('Should display trending gifs', () => {
    cy.visit('http://localhost:3000/');

    cy.expectImageToBeVisible('[data-testid="trending-gif"]');
  });

  it('Should open a modal when clicking on a gif and should be possible to favourite and unfavourite it', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="trending-gif"]')
      .first()
      .click()
      // Check if the displayed gif in the modal is the same
      // by comparing the src attributes
      .invoke('attr', 'src')
      .then((secondSrc) => {
        const src2 = secondSrc;

        cy.get('[data-testid="trending-gif"]')
          .first()
          .invoke('attr', 'src')
          .then((firstSrc) => {
            expect(firstSrc).to.equal(src2);
          });
      })
      .favouriteGif()
      .should(() => {
        expect(localStorage.getItem('favourites')).not.to.be.null;
      })
      .unfavouriteGif()
      .should(() => {
        expect(localStorage.getItem('favourites')).to.eq('');
      })
      .get('[data-testid="modal"]')
      .should('be.visible');
  });
});
