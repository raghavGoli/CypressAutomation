
describe('New Tab Handling', function () {
  it('My First Test Case', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').invoke('removeAttr', 'target').click()

    cy.origin('https://www.qaclickacademy.com/', () => {

      cy.url().should('include', 'qaclickacademy')
      cy.get('#navbarSupportedContent a[href*="about"]').click()
      cy.get('div[class="page-banner-cont"] h2').should('have.text', 'About Us')
    })

  })

  it('My Second Test Case', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').then(function (el) {
      const url = el.prop('href')
      cy.log(url)
      cy.visit(url)
      cy.origin(url, () => {
        cy.url().should('include', 'qaclickacademy')
        cy.get('#navbarSupportedContent a[href*="about"]').click()
        cy.get('div[class="page-banner-cont"] h2').should('have.text', 'About Us')
      })

    })
  })

  it('WebDriver University Multile Windows Handling', () => {

    cy.visit('https://webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    cy.title().should('include', 'WebDriver | Contact Us')

  })

  it('InternetHerokuapp Window Handling', () => {

    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click({ force: true })
    cy.title().should('include', 'New Window')
    cy.get("div[class='example'] h3").contains('New Window')

  })


  it.only('Handling new Browser Window without target attribute', () => {

    cy.origin('https://alapanme.github.io/testing-cypress.html', () => {
      cy.window().then((win) => {

        cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url;

        })

      })


    })
    cy.get('button').contains('Try it').click({ forece: true })
    cy.url().should('include', 'https://the-internet.herokuapp.com/');


  })


})
