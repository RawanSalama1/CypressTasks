/// <reference types="cypress" />
class HomePage {
    visit() {
        cy.visit('https://www.demoblaze.com/index.html#')
    }
    Monitor() {
        cy.contains('Monitors').click()
    }
}
export default HomePage