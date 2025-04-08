describe('Intercepting Response', function () {    
    it('Intercepting Response using Cypress a demo', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
       
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', {
            statusCode: 200,
            body: [
                { bookName: 'RestAssured with Java', isbn: 'LSA', aisle: '2303' }
            ]
        }).as('getBook')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@getBook').then(({ request, response }) => 
        {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    

    })
})
