describe('Main flow', () => {
  before(() => {
    cy.visit('/')
    cy.url().should('include', 'http://localhost:3000/')
  })
  it('Get text link', () => {
    cy.get('a').contains('Learn React');
  })
});