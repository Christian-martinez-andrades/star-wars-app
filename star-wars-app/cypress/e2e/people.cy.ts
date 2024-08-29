
describe('People', () => {
    it('should display the correct data from the backend', () => {
        cy.intercept('GET', '/api/people/', { fixture: 'peopleMockData.json' }).as('getData');
        cy.visit('http://localhost:4200/people');
        cy.wait('@getData', { timeout: 10000 });
        cy.contains('Luke');
    });
});