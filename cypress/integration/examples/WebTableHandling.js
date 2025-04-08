
describe('Web Table Handling', function() {
  it('My First Test Case', function() {
   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("[name='courses'] tr td:nth-child(2)").each(($el, index, $list) => {
            const text=$el.text()
            if(text.includes('SoapUI'))
            {
                cy.get("[name='courses'] tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText=price.text()
                    expect(priceText).to.equal('35')
                })
            }
        })
        
})

})
