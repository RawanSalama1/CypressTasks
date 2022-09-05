/// <reference types="cypress" />
import todo from '../fixtures/todo.json'
describe('Test Suite 3', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/angularjs/#/')

    })
    // it('Adds Two itemds to the todo list', () => {

    // })
    it('Test Todo APP', () => {
        cy.get('.new-todo').type(`${todo.todo1}{enter}`)
        cy.get('.new-todo').type(`${todo.todo2}{enter}`)
        cy.get('.ng-binding').eq(0).should('exist').contains(todo.todo1)
        cy.get('.ng-binding').eq(1).should('exist').contains(todo.todo2)
        cy.get('input[type=checkbox]').eq(1).click()
        cy.get('.filters > :nth-child(3) > a').click()
        cy.get('.ng-binding').should('exist')
    })



})