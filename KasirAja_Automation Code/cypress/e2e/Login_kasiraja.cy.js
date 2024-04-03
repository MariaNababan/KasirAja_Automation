const HomePage = require('../support/pages/homePage/home-page')
const LoginPage = require('../support/pages/loginPage/login-page')

var randomEmail = generateRandomEmail();


function generateRandomEmail(){
	const time = new Date().getTime()
	return "sari"+time+"@gmail.com";
}

describe('User should be able to sign in using registred account', () => {
  it('with valid data', () => {
    // 1. Visit url
    // 2. Fill email
    // 3. Fill password
    // 4. Click 'login' button

    HomePage.goHomepage()
    LoginPage.fillEmail(randomEmail)
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()

    
  })
})
