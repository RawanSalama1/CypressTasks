/// <reference types="cypress" />
import test from "../../fixtures/data.json"
const filePath = ("/Users/rs2/OneDrive - AXSOS AG/JSTester/New/cypress/downloads/SampleCSVFile_2kb.csv" || "cypressTasks/cypress/downloads/samplecsvfile_2kb.csv")
describe('download csv file', () => {
    it('Check rows in csv file', () => {
        cy.visit('https://sample-videos.com/download-sample-csv.php')
        cy.get('.download_csv').eq(0).click()
        cy.wait(2000);
        cy.task('parseXlsx', { filePath }).then(
            jsonData => {
                expect(jsonData[0].data[0][0]).to.eq(test.data1)
                expect(jsonData[0].data[0][1]).to.eq(test.data2)
                expect(jsonData[0].data[0][2]).to.eq(test.data3)
                expect(jsonData[0].data[0][3]).to.eq(test.data4)
                expect(jsonData[0].data[0][4]).to.eq(test.data5)
                expect(jsonData[0].data[0][5]).to.eq(test.data6)
                expect(jsonData[0].data[0][6]).to.eq(test.data7)
                expect(jsonData[0].data[0][7]).to.eq(test.data8)
                expect(jsonData[0].data[0][8]).to.eq(test.data9)
                expect(jsonData[0].data[0][9]).to.eq(test.data10)




            }
        );
    })
})