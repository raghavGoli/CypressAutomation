
describe('My Second Test Suite', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }
        })

        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.cart-icon > img').click()
        cy.get("div[class='cart-preview active'] button[type='button']").click()
        cy.get('.product-name').should('have.text','Cashews - 1 Kg')
        cy.contains('Place Order').click()
        })
  
})
