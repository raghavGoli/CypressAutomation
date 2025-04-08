import CartPage from './CartPage'
class ProductPage{


    pageValidation(){

        cy.contains('Shop Name').should('be.visible')
    }

    getCardLimitCount()
    {
       return cy.get('app-card-list app-card')

    }

    selectProduct(productName)
    {
        cy.get('app-card-list app-card').filter(`:contains("${productName}")`).then(function (element) {
            cy.wrap(element).contains('Add').click()
          })
    }

    selectAddToCartForFirstProduct()
    {
        cy.get('app-card-list app-card').eq(0).contains('Add').click()
    }

    goToCart()
    {
        cy.get('.nav-link.btn.btn-primary').click()
        return new CartPage()
    }
}
export default ProductPage;