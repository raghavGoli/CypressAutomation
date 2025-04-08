describe('Navigation commands', () => {

    it('Navigation Command - back', () => {

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.title().should('include', 'Contact Us')
        cy.go('back')
        cy.url().should('include', 'https://webdriveruniversity.com/')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true })
        cy.title().should('include', 'Login Portal')

        cy.go('back')
        cy.url().should('include', 'https://webdriveruniversity.com/')

        cy.go('forward')
        cy.title().should('include', 'Login Portal')


    })







})