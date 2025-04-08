import neatCSV from 'neat-csv';
let productName

describe('JWT Token Usage', function () {
    it('JWT Token logged in using local storage', function () {
        cy.getJWTToken().then(function () {
            cy.visit('https://rahulshettyacademy.com/client',
                {
                    onBeforeLoad: function (win) {
                        win.localStorage.setItem('token', Cypress.env('token')) // Setting the token in local storage
                    }
                })

        })

        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text();
        })

        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind")
        cy.get('.ta-results button').each(($e1, index, $list) => {
            if ($e1.text() === " India") {
                cy.wrap($e1).click()

            }

        })
        cy.get(".action__submit").click();
        cy.wait(6000)
        //cy.get(".order-summary button").click();
        cy.contains('button', 'Click To Download Order Details in CSV').click();
        //cy.get('button').should('contain.text', '').click();
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_gvenkataraghavendra.csv")
            .then(async (text) => {
                const csv = await neatCSV(text)
                console.log(csv)
                const actualProductCSV = csv[0]["Product Name"]
                expect(productName).to.equal(actualProductCSV)
            })
    })
})