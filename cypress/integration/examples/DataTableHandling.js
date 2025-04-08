const { beforeEach } = require("mocha")

describe('Data Table Handling', function () {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")

    })
    it('Validate the sum of all ages in the Web Table', function () {
        var allCellsList = [];
        let num = 0;
        cy.get('#thumbnail-1 td').each(($ele, index, $list) => {
            allCellsList[index] = $ele.text()
        }).then(() => {
            for (var i = 0; i < allCellsList.length; i++) {
                if (Number(allCellsList[i])) {
                    num = num + Number(allCellsList[i])
                }
            }

            cy.log("Found total age:" + num)
            expect(num).to.eq(322)
        })

    })

    it('Validate the age of Last Name -Woods ', function () {
        var allCellsList = [];
        let num = 0;
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($ele, index, $list) => {
            const text = $ele.text()
            if (text.includes('Woods')) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
                    const agetext = age.text()
                    expect(agetext).to.equal("80")


                })
            }
        })

    })

})
