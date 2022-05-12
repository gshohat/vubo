describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('title should be "Finesse"', () => {
    cy.get('[data-cy=title]').should('have.text', 'Let\'s start by getting to know you');
  });
});
