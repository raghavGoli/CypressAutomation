
describe('Alert Handling', function () {
  it('My First Test Case', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //cypress autmatically handles the alerts with ok and cancel buttons
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()

    //window:alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

  })

  it('My Second Test Case- JS Alerts', function () {

    cy.visit("https://webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
    cy.get('#button1').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!')

    })

  })

  it('My Third Test Case- JS Confirm Alerts -OK button', function () {

    cy.visit("https://webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

    cy.get('#button4').click()
    cy.on('window:confirm', (str) => {
      return true;
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!')
  })

  it('My Third Test Case- JS Confirm Alerts -Cancel button', function () {

    cy.visit("https://webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

    cy.get('#button4').click()
    cy.on('window:confirm', (str) => {
      return false;
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
  })



  it('My Fourth Test Case- JS Confirm Alerts -Using STUB concept', function () {

    cy.visit("https://webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

    const stub = cy.stub()
    cy.on('window:confirm',stub)

   cy.get('#button4').click().then(()=>{

      expect(stub.getCall(0)).to.be.calledWith('Press a button!')
   }).then(()=>{

      return true;
   }).then(()=>{

    cy.get('#confirm-alert-text').contains('You pressed OK!')
   })

  })
})
