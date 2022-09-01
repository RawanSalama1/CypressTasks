/// <reference types="cypress" />
describe('Verify computer is added ', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('.input').eq(0).type('test')
        cy.get('.input').eq(1).type('test')
        cy.get('.button').eq(1).click()

    })

    it.only('Open new account', () => {
        cy.get('li').contains('Open New Account').click()
        cy.get('#type').eq(0).select('SAVINGS')
        cy.get('b')
            .contains('A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.')
            .should('be.visible')
        cy.get('.button').contains('Open New Account').click()
        cy.get('#newAccountId').should('be.visible')
        cy.get('li').contains('Accounts Overview').click()
      
   
    })
    it('Poistove tests on Bill Payment Service', () => {
        cy.get('li').contains('Bill Pay').click()
        cy.get('input[name = "payee.name"]').type('123')
        cy.get('input[name = "payee.address.street"]').type('ram')

        cy.get('input[name = "payee.address.city"]').type('ramallah')
        cy.get('input[name = "payee.address.state"]').type('ram')
        cy.get('input[name = "payee.address.zipCode"]').type('ram')
        cy.get('input[name = "payee.phoneNumber"]').type('05983412')
        cy.get('input[name = "payee.accountNumber"]').type('1')
        cy.get('input[name = "verifyAccount"]').type('1')
        cy.get('input[name = "amount"]').type('1')

        cy.get('select').eq(0).select('15009')
        cy.get('.button').contains('Send Payment').click()

    })
    it('Leave all the fields empty', () => {
        cy.get('.button').contains('Send Payment').click()
    })
    it('Fill the fields with invalid input', () => {
        cy.get('li').contains('Bill Pay').click()
        cy.get('input[name = "payee.name"]').type('123')
        cy.get('input[name = "payee.address.street"]').type('ram')

        cy.get('input[name = "payee.address.city"]').type('ramallah')
        cy.get('input[name = "payee.address.state"]').type('ram')
        cy.get('input[name = "payee.address.zipCode"]').type('ram')
        cy.get('input[name = "payee.phoneNumber"]').type('05983412')
        cy.get('input[name = "payee.accountNumber"]').type('rawan')
        cy.get('input[name = "verifyAccount"]').type('rawan')
        cy.get('input[name = "amount"]').type('rew')
        cy.get('select').eq(0).select('15009')
        cy.get('.button').contains('Send Payment').click()
        cy.get('.error').should('exist').contains('Please enter a valid number.')
    })
it('Positive Test on transfer Funds',()=>{
    cy.get('li').contains('Transfer Funds').click()
    cy.get('#amount').type('12')
    cy.get('#fromAccountId').select('13677')
    cy.get('toAccountId').select('13677')
    cy.get('.button').contains('Transfer').click();
})
})