/// <reference types="cypress" />
class CartPage {
    AddCart() {
        cy.contains('Add to cart').click()
        cy.on('window:alert', alertText => {
            expect(alertText).to.eql('Product added')
        })
    }
}

export default CartPage