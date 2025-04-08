
describe('SQL DB Test', function() 
{

it('My FirstTest case',function() {
    cy.log("hello")
    cy.sqlServer("Select * from Persons").then(function(result)
    {
        console.log(result[0][1])

    })
})

})
