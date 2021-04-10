describe('first cypress test', () => {

  beforeEach(() => {
    cy.intercept("/expense", {fixture:'mock_expenses.json'})
  })

  it('URL for the localEnvironment', () => {
    cy.visit(Cypress.env('env_url'));
    expect('something');
  });
});