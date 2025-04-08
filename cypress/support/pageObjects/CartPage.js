import ConfirmationPage from "./ConfirmationPage";

class CartPage {

    sumOfProducts() {
        var sum = 0;
        return cy.get('tr td:nth-child(4) strong').each($e1 => {
            const amount = Number($e1.text().split(" ")[1].trim())
            sum = sum + amount

        }).then(() => {

            return sum
        })

    }

    goToCheckout() {
        cy.get('.btn.btn-success').click()
        return new ConfirmationPage()
    }



}

export default CartPage;