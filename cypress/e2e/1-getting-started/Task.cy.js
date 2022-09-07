/// <reference types="cypress" />
describe('DB Testing', () => {
    it.only('Create Table', () => {
        cy.task("queryDb", 'update mydb1.student set SNAME = "tala" where SNO = 101 ');
    })
})
