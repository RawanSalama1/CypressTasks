/// <reference types="cypress" />
class HomePage {
    visit() {
        cy.visit('https://www.demoblaze.com/index.html#')
    }
    ClickOnMonitor() {
        cy.get('[onClick*=byCat]').eq(2).click()
    }
}

export default HomePage