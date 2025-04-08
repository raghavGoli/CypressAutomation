// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import * as XLSX from 'xlsx';
Cypress.Commands.add('submitFormDetails', () => {
        cy.get('#country').type('India')
        //cy.wait(8000)-overrided the default timeout in cypress.config.js
        cy.get('.suggestions ul li a').click()
        cy.get("input[value='Purchase']").click()
})

Cypress.Commands.add('getJWTToken', (() => {
        cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login',
                {
                "userEmail": "gvenkataraghavendra@gmail.com",
                "userPassword": "Iamking@123"
                }).then(function (response) {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.property('message', 'Login Successfully')
                       Cypress.env('token', response.body.token)
                })

}))

Cypress.Commands.add('convertExcelToJson', (filePath, outputFile) => {
        return cy.readFile(filePath, 'binary').then((content) => {
        return Cypress.Promise.resolve().then(() => {
          const workbook = XLSX.read(content, { type: 'binary' });
          const sheetName = workbook.SheetNames[0]; 
          const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]); 

          cy.writeFile(`cypress/fixtures/${outputFile}.json`, jsonData);
          return jsonData;
        })
      })
})