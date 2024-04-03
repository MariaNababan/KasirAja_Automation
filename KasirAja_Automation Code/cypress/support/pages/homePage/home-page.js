const locator = require('../../locators/home-page-locators')

class homePage {

    async goHomepage() {
        cy.visit('https://kasiraja.ajikamaludin.id/login')
    }

    async clickSignUpMenu() {
        cy.xpath(locator.datatestid.signup_menu).click({timeout: 2000})
    }

    async clickSignInMenu() {
        cy.xpath(locator.datatestid.signin_menu).click({timeout: 2000})
    }


}

module.exports = new homePage()
