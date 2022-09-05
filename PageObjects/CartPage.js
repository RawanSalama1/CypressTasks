/// <reference types="cypress" />
class CartPage {
    AddCart() {
        const successMessage = 'Product added'
        cy.contains('Add to cart').click()
        cy.on('window:alert', alertText => {
            expect(alertText).to.eql(successMessage)
        })
    }
}

export default CartPage