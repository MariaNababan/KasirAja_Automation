const locator = require('../../locators/login-page-locators')
const staticText = require('../../static_text/static-text')

class loginPage {

    async fillEmail (randomEmail) {
        cy.xpath(locator.datatestid.email_input).type(randomEmail, {force: true}).should('have.value', randomEmail, {timeout: 2000})
    }

    async fillPassword () {
        cy.xpath(locator.datatestid.password_input).type('password', {force: true}).should('have.value', staticText.loginPage.password, {timeout: 2000})
    }

    async clickLoginButton () {
        cy.xpath(locator.datatestid.login_button).click()
    }

}

module.exports = new loginPage()
