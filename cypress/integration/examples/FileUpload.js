
describe('File Upload', function () {
    beforeEach(function () {
        cy.visit("https://webdriveruniversity.com/File-Upload/index.html")
    })
    it('PNG file upload', function () {

        cy.get('#myFile').selectFile('cypress/fixtures/cypress-logo.png')
        cy.get('#submit-button').click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
        })
    })

    it('No file upload', function () {
        cy.get('#submit-button').click()
        cy.on("window:alert", (str) => {

            expect(str).to.equal('You need to select a file to upload!')
        })
    })

})
