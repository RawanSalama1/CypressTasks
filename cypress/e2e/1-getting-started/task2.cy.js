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
        cy.get('#main  > h1').should('exist').contains('574 computers found')
    })
    it('Verify computer is filtered',()=> {
        cy.get('#searchbox').type('ASCI purple')
        cy.get('#searchsubmit').click()
        cy.get('tbody').should('have.length',1)
        cy.get('tbody > tr > :nth-child(1)').should('exist').contains('ASCI Purple')
        cy.get('tbody > tr > :nth-child(2)').should('exist').contains('01 Jan 2005')
        cy.get('.current > a').should('exist').contains('Displaying 1 to 1 of 1')
    })

})