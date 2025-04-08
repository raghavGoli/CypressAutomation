describe('Mouse Actions Handling', function() {
    it('Scroll into view', function() {
     
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#scrolling-around').scrollIntoView()
  })
  
  it('Drag and Drop', function() {
    cy.visit("https://webdriveruniversity.com/Actions/index.html")
    cy.get('#draggable').trigger('mousedown', { which: 1 })
    cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
    
})

it('Double click', function() {
    cy.visit("https://webdriveruniversity.com/Actions/index.html")
    cy.get('#double-click').dblclick()
    
})

it('Click and Hold', function() {
    cy.visit("https://webdriveruniversity.com/Actions/index.html")
    cy.get('#click-box').trigger('mousedown',{which: 1}).then(($element)=>{
        expect($element).to.have.css('background-color','rgb(0, 255, 0)')
    })
    
})

})