describe('Fill the form in the Contact Us page of WebDriver University', function () {

before(()=>{
    cy.fixture("example").then(function(data){
        globalThis.data=data;
        })
    
    })
    
    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        

    })

    it('Contact Us Page Form Fill and validate success message', function () {
       
       cy.title().should('include', 'WebDriver | Contact Us')
        cy.get('#contact_form').find("input[placeholder='First Name']").type(globalThis.data.firstName)
        cy.get('#contact_form').find("input[placeholder='Last Name']").type(globalThis.data.lastName)
        cy.get('#contact_form').find("input[placeholder='Email Address']").type(globalThis.data.emailAddress)
        cy.get("textarea[placeholder='Comments']").type('No Comments')
        cy.get("input[value='SUBMIT']").click()
        cy.get("div[id='contact_reply'] h1").should('have.text', 'Thank You for your Message!')
    })

    it('Contact Us Page Form Fill and validate error message', function () {
      
       cy.title().should('include', 'WebDriver | Contact Us')
        cy.get('#contact_form').find("input[placeholder='First Name']").type(globalThis.data.firstName)
        cy.get('#contact_form').find("input[placeholder='Last Name']").type(globalThis.data.lastName)
        cy.get('#contact_form').find("input[placeholder='Email Address']").type(globalThis.data.firstName)
        cy.get("textarea[placeholder='Comments']").type('No Comments')
        cy.get("input[value='SUBMIT']").click()
        cy.get('body').invoke('text').then((text) => {
            expect(text).to.include('Error: Invalid email address')
        })

    })

})