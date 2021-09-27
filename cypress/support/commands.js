Cypress.Commands.add('favouriteGif', () => {
  cy.get('[data-testid="detailed-gif"]')
    .dblclick()
    .get('[data-testid="favourite-icon"]')
    .should('be.visible')
    .wait(600);
});

Cypress.Commands.add('unfavouriteGif', () => {
  cy.get('[data-testid="detailed-gif"]')
    .dblclick()
    .get('[data-testid="unfavourite-icon"]')
    .should('be.visible')
    .wait(600);
});

Cypress.Commands.add('expectImageToBeVisible', (imageSelector) => {
  cy.get(imageSelector)
    .should('be.visible')
    .and((img) => {
      // naturalWidth and naturalHeight are set when the image loads
      expect(img[0].naturalWidth).to.be.greaterThan(0);
      expect(img[0].naturalHeight).to.be.greaterThan(0);
    });
});
