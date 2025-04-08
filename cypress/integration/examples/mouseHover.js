
describe('Web Table Handling', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //show method should be applied on immediate parent of hidden element
        cy.get(".mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
})

})
