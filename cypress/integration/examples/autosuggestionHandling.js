
describe('AutoSuggestion Handling', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('Virgin')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
          if($el.text()==="Virgin Islands (U.S.)")
          {
            $el.trigger("click")
          }
        })
  
        cy.get('#autocomplete').should('have.value','Virgin Islands (U.S.)')
})

it('My Second Test Case', function() {
   
  cy.visit("https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html")
  cy.get('#myInput').type('G')
  cy.get('#myInputautocomplete-list > *').each(($el,index,$list)=>{

    if($el.text()=== "Grapes")
    {

      $el.trigger("click")
    }
  })

  cy.get('#myInput').should('have.value','Grapes')
})
})
