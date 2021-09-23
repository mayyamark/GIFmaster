describe('Trending page', () => {
  it('Should display trending gifs', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="trending-gif"]')
      .should('be.visible')
      .and((img) => {
        // naturalWidth and naturalHeight are set when the image loads
        expect(img[0].naturalWidth).to.be.greaterThan(0);
        expect(img[0].naturalHeight).to.be.greaterThan(0);
      });
  });

  it('Should be possible to favourite and unfavourite the first gif', () => {
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
      });
  });

  it('Should navigate to /search-gifs when the user triggers a search', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="search-input"]')
      .type('dog')
      .type('{enter}')
      .url()
      .should('contains', 'search-gifs?keyword=dog');
  });
});
