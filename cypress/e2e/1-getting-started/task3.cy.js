/// <reference types="cypress" />



describe('Verify computer is added ', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('.input').eq(0).type('test')
        cy.get('.input').eq(1).type('test')
        cy.get('.button').eq(1).click()

    })

    it.skip('Open new account', () => {
        cy.get('li').contains('Open New Account').click()
        cy.get('#type').eq(0).select('SAVINGS')
        cy.get('#fromAccountId').eq(0).select(0)
        cy.get('.button').contains('Open New Account').click()
        cy.wait(3000)
        cy.get('#newAccountId').then($AccNum => {
            const num = $AccNum.text()
            cy.log(num)
            cy.get('li').contains('Accounts Overview').click()
            cy.get('a.ng-binding').contains(num).should('exist', '$50.00')
        })

    })
    it.skip('Poistove tests on Bill Payment Service', () => {
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
        cy.get('select').eq(0).select(0)
        cy.get('.button').contains('Send Payment').click()
    })
    it.skip('Leave all the fields empty', () => {
        cy.get('.button').contains('Send Payment').click()
    })
    it.skip('Fill the fields with invalid input', () => {
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
        cy.get('select').eq(0).select(0)
        cy.get('.button').contains('Send Payment').click()
        cy.get('.error').should('exist').contains('Please enter a valid number.')
    })
    it.skip('Positive Test on transfer Funds', () => {
        cy.get('li').contains('Open New Account').click()
        cy.get('#type').eq(0).select('SAVINGS')
        cy.get('#fromAccountId').eq(0).select(0)
        cy.get('.button').contains('Open New Account').click()
        cy.get('li').contains('Transfer Funds').click()
        cy.wait(2000)
        cy.get('#amount').type('12')
        cy.get('#fromAccountId').select(0)
        cy.get('#toAccountId').select(0)
        cy.get('.button').contains('Transfer').click();
        cy.wait(2000)
        cy.get('.title').contains('Transfer Complete!').should('exist')
        cy.get('#amount').should('exist')
    })
    it.skip('Fill invalid input in transfer', () => {
        cy.get('li').contains('Open New Account').click()
        cy.get('#type').eq(0).select('SAVINGS')
        cy.get('#fromAccountId').eq(0).select(0)
        cy.get('.button').contains('Open New Account').click()
        cy.get('li').contains('Transfer Funds').click()
        cy.wait(2000)
        cy.get('#amount').type('rawan')
        cy.get('#fromAccountId').select(0)
        cy.get('#toAccountId').select(0)
        cy.get('.button').contains('Transfer').click();
        cy.get('.error.ng-scope').contains('Please enter a valid amount.').should('exist')
    })
})