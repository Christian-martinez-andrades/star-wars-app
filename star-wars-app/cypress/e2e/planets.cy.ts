
describe('Planets', () => {
    it('should display the correct data from the backend', () => {
        cy.intercept('GET', '/api/planets/', { fixture: 'planetsMockData.json' }).as('getData');
        cy.visit('http://localhost:4200/planets');
        cy.wait('@getData', { timeout: 10000 });
        cy.contains('Tatooine');
    });
});