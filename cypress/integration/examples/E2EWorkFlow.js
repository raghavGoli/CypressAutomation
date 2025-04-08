import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CartPage from '../../support/pageObjects/CartPage'
import ConfirmationPage from '../../support/pageObjects/ConfirmationPage'


describe('End to End WorkFlow Handling', function () {


  before(function () {
    cy.fixture('example').then(function (data) { // Reading data from fixture file
      this.data = data
      this.homePage = new HomePage()
    })

  })

  it('Submit Order', function () {
    //Cypress.config('defaultCommandTimeout', 10000) // Overriding the default timeout   
    this.homePage.goToHomePage(Cypress.env('url')+"/loginpagePractise/")
    const productPage = this.homePage.login(this.data.userName, this.data.password)
    productPage.pageValidation()
    productPage.getCardLimitCount().should('have.length', 4)
    productPage.selectProduct(this.data.productName)
    productPage.selectAddToCartForFirstProduct()
    const cartPage=productPage.goToCart()
    cartPage.sumOfProducts().then(function(sum){ 
      cy.log(sum)
      expect(sum).to.lessThan(this.data.price)
    })
    const confirmationPage =cartPage.goToCheckout()
    confirmationPage.submitFormDetails()
    confirmationPage.getAlertMessage().should('include.text', 'Success')
  })
})
