describe('Random page', () => {
  it('Should display gif details', () => {
    cy.intercept(
      'GET',
      'http://api.giphy.com/v1/gifs/random?api_key=zd5rWKKeQu7wqyr9Bb5nec4cc7PWmK2S',
      { fixture: 'random-gif.json' }
    ).as('getRandomGif');

    cy.visit('http://localhost:3000/random-gif');

    cy.wait('@getRandomGif');

    cy.expectImageToBeVisible('[data-testid="detailed-gif"]')
      .expectElementToExist('[data-testid="title"]')
      .expectElementToExist('[data-testid="import-date"]')
      .expectElementToExist('[data-testid="user-link"]')
      .expectElementToExist('[data-testid="raiting"]')
      .expectElementToExist('[data-testid="raiting-explanation"]')
      .expectElementToExist('[data-testid="giphy-link"]')
      .expectElementToExist('[data-testid="another-gif-button"]');
  });

  it('Should be possible to favourite and unfavourite the displayed gif', () => {
    cy.intercept(
      'GET',
      'http://api.giphy.com/v1/gifs/random?api_key=zd5rWKKeQu7wqyr9Bb5nec4cc7PWmK2S',
      { fixture: 'random-gif.json' }
    ).as('getRandomGif');

    cy.visit('http://localhost:3000/random-gif');

    cy.wait('@getRandomGif');

    cy.favouriteGif()
      .should(() => {
        expect(localStorage.getItem('favourites')).not.to.be.null;
      })
      .unfavouriteGif()
      .should(() => {
        expect(localStorage.getItem('favourites')).to.eq('');
      });
  });

  it('Should display another random gif when the user clicks the "Another one" button', () => {
    let interceptCount = 0;

    cy.intercept(
      'http://api.giphy.com/v1/gifs/random?api_key=zd5rWKKeQu7wqyr9Bb5nec4cc7PWmK2S',
      (req) => {
        req.reply((res) => {
          if (interceptCount === 0) {
            interceptCount += 1;
            res.send({ fixture: 'random-gif.json' });
          } else {
            res.send({ fixture: 'another-random-gif.json' });
          }
        });
      }
    ).as('getRandomGif');

    cy.visit('http://localhost:3000/random-gif');

    cy.wait('@getRandomGif');

    cy.get('[data-testid="detailed-gif"]')
      .invoke('attr', 'src')
      .then((firstSrc) => {
        const src1 = firstSrc;

        cy.get('[data-testid="another-gif-button"]')
          .click()
          .get('[data-testid="detailed-gif"]')
          .invoke('attr', 'src')
          .then((firstSrc) => {
            expect(firstSrc).not.to.equal(src1);
          });
      });
  });

  it('Should open the gif in Giphy.com when the user clicks on the corresponding link', () => {
    cy.intercept(
      'GET',
      'http://api.giphy.com/v1/gifs/random?api_key=zd5rWKKeQu7wqyr9Bb5nec4cc7PWmK2S',
      { fixture: 'random-gif.json' }
    ).as('getRandomGif');

    cy.visit('http://localhost:3000/random-gif');

    cy.wait('@getRandomGif');

    cy.get('[data-testid="giphy-link"]').invoke('removeAttr', 'target').click();

    cy.url().should(
      'include',
      'https://giphy.com/gifs/splat-nicksplat-aaahh-real-monsters-xT1R9Zqz0hXdEf9kWY'
    );
  });

  it("Should open the uploader's profile in Giphy.com when the user clicks on the corresponding link", () => {
    cy.intercept(
      'GET',
      'http://api.giphy.com/v1/gifs/random?api_key=zd5rWKKeQu7wqyr9Bb5nec4cc7PWmK2S',
      { fixture: 'random-gif.json' }
    ).as('getRandomGif');

    cy.visit('http://localhost:3000/random-gif');

    cy.wait('@getRandomGif');

    cy.get('[data-testid="user-link"]').invoke('removeAttr', 'target').click();

    cy.url().should('include', 'https://giphy.com/nickrewind/');
  });
});
