/// <reference types="cypress" />
class Monitors {
    CheckName() {
        cy.wait(2000)
        // cy.get('.card-title').should("exist").contains("ASUS Full HD")
        cy.get('.hrefch').contains('ASUS Full HD').should('exist')
        cy.get('h5').contains('$230').should('exist')
        cy.contains('ASUS VS247H-P 23.6- Inch Full HD').should("exist")
        cy.get('.hrefch').contains('ASUS Full HD').click()
    }
}

export default Monitors
