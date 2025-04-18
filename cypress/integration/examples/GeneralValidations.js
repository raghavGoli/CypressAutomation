
describe('My First Test Suite', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }
        })

        cy.get('.brand').should('have.text','GREENKART')

        // print in logs
        cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())

        })
  
})
})
