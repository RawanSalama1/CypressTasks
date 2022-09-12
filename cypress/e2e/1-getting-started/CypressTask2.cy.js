/// <reference types="cypress" />
import data from '../../fixtures/keywords.json'
describe('Fill the form using the data stored in data.json file.', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
    })
    it.skip('Fill the form', () => {

        cy.get("#userName").type(data.data1)
        cy.get('#userEmail').type(data.data2)
        cy.get('#currentAddress').type(data.data3)
        cy.get('#permanentAddress').type(data.data4)
        cy.get('#submit').click()
    })

})