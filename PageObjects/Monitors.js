/// <reference types="cypress" />
class Monitors {
    CheckName() {
        //cy.wait(200)
        const title = 'ASUS Full HD'
        const price = '$230'
        const details = 'ASUS VS247H-P 23.6- Inch Full HD'
        cy.get('.hrefch').eq(1).contains(title).should('exist')
        cy.get('h5').contains(price).should('exist')
        cy.contains(details).should("exist")
        cy.get('.hrefch').contains(title).click()
    }
}
export default Monitors
