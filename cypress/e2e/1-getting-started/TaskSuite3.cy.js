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
    it('Visit Website and click on Monitors', () => {

        home.visit()
        home.Monitor()
        monitor.CheckName()
        cart.AddCart()
        table.checkTable()

    })
})