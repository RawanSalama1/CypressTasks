/// <reference types="cypress" />
describe('Internet hookuaap ', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it.skip('Open the application successfully', () => {

        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').should('exist').contains('You logged into a secure area!')

    })
    it.skip('Logout Succesffuly', () => {

        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('.button').click();
        cy.get('#flash').should('exist').contains('You logged out of the secure area!')
    })

    it.skip('Put invalid username and password', () => {
        cy.get('#username').type('rawan')
        cy.get('#password').type('123')
        cy.get('.radius').click()
        cy.get('#flash').should('exist').contains('Your username is invalid!')
    })

})