const locator = require('../../locators/register-page-locators')

class registerPage {

    async fillNamaToko(randoName) {
        cy.xpath(locator.datatestid.namatoko_input)
            .type(randoName, {force: true})
            .should('have.value', randoName)
    }
    
    async fillEmail(randomEmail) {
        cy.xpath(locator.datatestid.email_input)
            .type(randomEmail, {force: true})
            .should('have.value', randomEmail)
    }

    async fillPassword() {
        cy.xpath(locator.datatestid.password_input)
            .type('password', {force: true})
            .should('have.value', 'password', {timeout: 2000})
    }

    async clickSignUpBtn() {
        cy.xpath(locator.datatestid.signup_button)
            .click()
        
        cy.wait(10000)
    }

}

module.exports = new registerPage();
