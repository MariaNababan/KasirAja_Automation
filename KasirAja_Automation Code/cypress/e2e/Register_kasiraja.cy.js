const HomePage = require('../support/pages/homePage/home-page')
const LoginPage = require('../support/pages/loginPage/login-page')
const RegisterPage = require('../support/pages/registerPage/register-page')

var randomUser = generateRandomNamaToko();
var randomEmail = generateRandomEmail();

function generateRandomNamaToko(){
	const time = new Date().getTime()
	return "sari"+time;
}

function generateRandomEmail(){
	const time = new Date().getTime()
	return "sari"+time+"@gmail.com";
}

describe('User should be able to sign up', () => {
  it('with valid data', () => {
    // 1. Visit url
    // 2. Validate user redirected to sign up page
    // 3. Fill Nama Toko
    // 4. Fill email
    // 5. Fill password
    // 6. Click 'daftar' button

    HomePage.goHomepage()
    HomePage.clickSignUpMenu()
    RegisterPage.fillNamaToko(randomUser)
    RegisterPage.fillEmail(randomEmail)
    RegisterPage.fillPassword()
    RegisterPage.clickSignUpBtn()


    LoginPage.fillEmail(randomEmail)
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()

    
  })
})
