/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import  'cypress-iframe'
describe('iframe Handling', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(5000)
        cy.iframe().find(".sidebar-title h3").should('contain.text','Testimonial')

})

it.only('My Second Test Case', function() {
   
  cy.visit("https://webdriveruniversity.com/")
  
  cy.get('#iframe').invoke('removeAttr', 'target').click()
  cy.frameLoaded('#frame')
  cy.iframe('#frame').find('#button-find-out-more').should('be.visible')
  cy.iframe('#frame').find('#button-find-out-more').click()
  cy.iframe('#frame').find('.modal-content').should('be.visible')
  cy.iframe('#frame').find('.modal-content p').should('have.text','Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')


})
})



