const { afterEach } = require("mocha")

describe('Hooks demo ', function () {

    before(() => {

        cy.log("This executes before all it blocks")
    })


    beforeEach(() => {

        cy.log("This executes before each it block")
    })
    it('My First Test Case', function () {

        cy.log("This is my First test Case")

    })

    it('My Second Test Case', function () {

        cy.log("This is my second test Case")

    })


    it('My Third Test Case', function () {

        cy.log("This is my third test Case")

    })
    afterEach(() => {

        cy.log("This executes after each it block")
    })
    after(() => {

        cy.log("This executes after all it blocks")
    })

})
