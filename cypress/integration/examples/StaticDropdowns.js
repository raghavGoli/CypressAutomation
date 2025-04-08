
describe('Static Dropdown Handling', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')

        })

        it('My second Test Case', function() {
   
          cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
          cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')
          cy.get('#dropdowm-menu-2').select('junit').should('have.value','junit')
          })
  
})
