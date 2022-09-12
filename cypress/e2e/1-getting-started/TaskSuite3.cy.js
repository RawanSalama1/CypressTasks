/// <reference types="cypress" />

import CartPage from "../../../PageObjects/CartPage"
import HomePage from "../../../PageObjects/HomePage"
import Monitors from "../../../PageObjects/Monitors"
import Product from "../../../PageObjects/Product"
const home = new HomePage()
const monitor = new Monitors()
const cart = new CartPage()
const table = new Product()
describe('Test Suite 3', () => {
    it.skip('Visit Website and click on Monitors', () => {
        cy.intercept('https://api.demoblaze.com/bycat').as('get')
        home.visit()
        home.ClickOnMonitor()
        cy.wait('@get')
        monitor.CheckName()
        cart.AddCart()
        table.checkTable()

    })
})