/// <reference types="cypress" />
describe('Fill the form using the data stored in data.json file.', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/upload-download')
    })
    it.skip('Upload File Successfully', () => {

        const imageFile = 'sunset.png'

        cy.get('input[type = file]').selectFile('cypress/fixtures/sunset.png', { action: 'drag-drop' })
        cy.get('#uploadedFilePath').should('exist')
    })
})