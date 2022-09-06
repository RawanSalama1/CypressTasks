/// <reference types="cypress" />
const filePath = '/Users/rs2/Downloads/SampleCSVFile_2kb.csv'
const data = [
    "1",
    "Eldon Base for stackable storage shelf, platinum",
    "Muhammed MacIntyre",
    "3",
    "-213.25",
    "38.94",
    "35",
    "Nunavut",
    "Storage & Organization",
    "0.8",
]

describe('downloaf csv file', () => {
    it('Check rows in csv file', () => {
        cy.visit('https://sample-videos.com/download-sample-csv.php')
        // cy.wait(1000)
        cy.get('.download_csv').eq(0).click
        cy.wait(2000);
        // call the parseXlsx task we created above to parse the excel and return data as json
        cy.task('parseXlsx', { filePath }).then(
            jsonData => {
                // finally we write the assertion rule to check if that data matches the data we expected the excel file to have.
                expect(jsonData[0].data[0]).to.eqls(data);
            }
        );
    })
})