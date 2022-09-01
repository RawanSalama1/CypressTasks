/// <reference types="cypress" />
describe('Test Computer database application', () => {
    beforeEach(() => {
        cy.visit('https://computer-database.gatling.io/computers')
    })
    it('Add new computer', () => {
        cy.get('#add').click();
        cy.get('#name').type('rawan')
        cy.get('#introduced').type('2022-12-03')
        cy.get('#discontinued').type('2022-12-10')
        cy.get('select').eq(0).select('RCA')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist').contains('Done ! Computer rawan has been created')

    })
})