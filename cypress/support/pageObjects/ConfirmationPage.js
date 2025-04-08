class ConfirmationPage{

    submitFormDetails()
    {
        cy.submitFormDetails()
    }

    getAlertMessage()
    {
        return cy.get('.alert')
    }

}
export default ConfirmationPage;