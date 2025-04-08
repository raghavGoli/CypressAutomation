
describe('Radio Button Handling', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[value="radio2"]').check().should('be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
})

it('My Second Test Case', function() {
   
  cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
 cy.get("#radio-buttons").find("input[type='radio']").eq(2).click()
  cy.get("#radio-buttons").find("input[type='radio']").eq(2).should('be.checked').and('have.value','yellow')
})
})
