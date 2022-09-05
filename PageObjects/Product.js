/// <reference types="cypress" />

class Product {

    checkTable() {
        cy.wait(2000)
        cy.get('#cartur').click()
        cy.get('#tbodyid').find('tr').each(function (row, i) {
            expect(i).to.be.lessThan(2)
        })
    }
}

export default Product