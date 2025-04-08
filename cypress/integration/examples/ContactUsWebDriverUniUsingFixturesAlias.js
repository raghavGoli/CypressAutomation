describe('Fill the form in the Contact Us page of WebDriver University', function () {

    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.fixture("example").as('user')

    })

    it('Contact Us Page Form Fill and validate success message', function () {
        cy.get('@user').then((user) => {
            cy.title().should('include', user.title)
            cy.get('#contact_form').find("input[placeholder='First Name']").type(user.firstName)
            cy.get('#contact_form').find("input[placeholder='Last Name']").type(user.lastName)
            cy.get('#contact_form').find("input[placeholder='Email Address']").type(user.emailAddress)

        })
        cy.get("textarea[placeholder='Comments']").type('No Comments')
        cy.get("input[value='SUBMIT']").click()
        cy.get("div[id='contact_reply'] h1").should('have.text', 'Thank You for your Message!')
    })

    it('Contact Us Page Form Fill and validate error message', function () {
        cy.get('@user').then((user) => {
            cy.title().should('include', user.title)
            cy.get('#contact_form').find("input[placeholder='First Name']").type(user.firstName)
            cy.get('#contact_form').find("input[placeholder='Last Name']").type(user.lastName)
            cy.get('#contact_form').find("input[placeholder='Email Address']").type(user.firstName)

        })
        cy.get("textarea[placeholder='Comments']").type('No Comments')
        cy.get("input[value='SUBMIT']").click()
        cy.get('body').invoke('text').then((text) => {
            expect(text).to.include('Error: Invalid email address')
        })

    })

})