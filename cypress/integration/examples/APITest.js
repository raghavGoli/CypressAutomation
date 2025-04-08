describe('API Tests Demo', function () {
    it('API Test - Validate POST Request', function () {
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name":"Learn Cypress Automation with JSSCRIPT",
            "isbn":"bcd3",
            "aisle":"292792",
            "author":"Goli Venkata"
            }).as('pokemon')
        cy.get('@pokemon').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.body).to.have.property('ID', 'bcd3292792')
        })
    })


})