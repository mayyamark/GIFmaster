describe('Upload page', () => {
  it('Should display the selected gif before uploading it', () => {
    cy.visit('http://localhost:3000/upload-gif');

    cy.expectElementToExist('[data-testid="upload-input"]')
      .attachFile('gif.gif')
      .expectElementToExist('[data-testid="upload-gif-preview"]');
  });

  it('Should remove the selected gif if the Cancel button is clicked', () => {
    cy.visit('http://localhost:3000/upload-gif');

    cy.expectElementToExist('[data-testid="upload-input"]')
      .attachFile('gif.gif')
      .expectElementToExist('[data-testid="upload-gif-preview"]')
      .get('[data-testid="cancel-button"]')
      .click()
      .get('[data-testid="upload-input"]')
      .invoke('attr', 'value')
      .should('be.undefined');
  });

  it('Should display a list of the selected gif and be able to choose one of them by clicking it', () => {
    cy.visit('http://localhost:3000/upload-gif');

    cy.expectElementToExist('[data-testid="upload-input"]')
      .attachFile(['gif.gif', 'gif2.gif', 'gif3.gif'])
      .get('[data-testid="rejected-file-box"]')
      .each((box) => expect(box).not.to.be.null)
      .first()
      .click()
      .expectElementToExist('[data-testid="upload-gif-preview"]');
  });

  it('Should be possible to upload a gif', () => {
    cy.setLocalStorage('uploads', '');

    cy.intercept(
      'POST',
      'http://upload.giphy.com/v1/gifs?api_key=zd5rWKKeQu7wqyr9Bb5nec4cc7PWmK2S',
      { fixture: 'gif.gif' }
    ).as('uploadGif');

    cy.visit('http://localhost:3000/upload-gif');

    cy.expectElementToExist('[data-testid="upload-input"]')
      .eq(0)
      .attachFile('gif.gif')
      .get('[data-testid="upload-button"]')
      .first()
      .click();

    cy.wait('@uploadGif');

    cy.expectElementToNotExist('[data-testid="upload-button"]');
  });
});
