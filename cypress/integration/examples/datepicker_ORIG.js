describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#datepicker').click();

        var date = new Date();
        date.setDate(date.getDate() + 365);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        /**
         * Recursively selects the desired month and year in a datepicker.
         * 
         * This function checks the current month and year displayed in the datepicker.
         * If the desired year is not displayed, it clicks the "next" button and calls itself recursively until the desired year is displayed.
         * Once the desired year is displayed, it checks the month and clicks the "next" button recursively until the desired month is displayed.
         * 
         * @function
         * @name selectMonthAndYear
         */
        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

       selectMonthAndYear();
    });
})