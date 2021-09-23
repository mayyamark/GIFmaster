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
