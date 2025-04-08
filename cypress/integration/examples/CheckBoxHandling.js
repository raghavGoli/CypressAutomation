
describe('CheckBox Handling', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        })
  
    
        it('My Second Test Case', function() {
          
          cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
          cy.get("input[value='option-1']").check().should('be.checked').and('have.value','option-1')
          cy.get("input[value='option-1']").uncheck().should('not.be.checked')
          cy.get('input[type="checkbox"]').check(['option-2','option-3'])
        
          })
})
