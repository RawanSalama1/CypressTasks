/// <reference types="cypress" />
describe('Test Computer database application', () => {
    beforeEach(() => {
        cy.visit('https://computer-database.gatling.io/computers')
    })
    it.only('Add new computer', () => {
        cy.get('#add').click();
        cy.get('#name').type('rawan')
        cy.get('#introduced').type('2022-12-03')
        cy.get('#discontinued').type('2022-12-10')
        cy.get('select').eq(0).select('RCA')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist').contains('Done ! Computer rawan has been created')
        cy.get('h1').contains('574 computers found').should('be.visible')
    })
    it('Verify computer is filtered', () => {
        cy.get('#searchbox').type('ASCI purple')
        cy.get('#searchsubmit').click()
        cy.get('tbody').should('have.length', 1)
        cy.get('table.computers.zebra-striped').contains('td', 'ASCI Purple').should('be.visible')
        cy.get('table.computers.zebra-striped').contains('td', '01 Jan 2005').should('be.visible')
        cy.get('table.computers.zebra-striped').contains('td', 'IBM').should('be.visible')
        cy.get('a').contains('Displaying 1 to 1 of 1').should('be.visible')
    })

})