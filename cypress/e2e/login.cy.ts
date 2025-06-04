import LoginPage from '../pages/LoginPage'

describe('Login Test', () => {

  it('TC01 Login Page Access', () => {

    LoginPage.visit()
    LoginPage.checkLoginPageElementsVisible();
  })

  it('TC02 Placeholder Visibility', () => {
    LoginPage.visit()
    LoginPage.checkPlaceholders()
    LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clearFields()
    LoginPage.checkPlaceholders()

  })

  it('TC03 Valid Data Entry', () => {
    LoginPage.visit()
    LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clickLogin()
    LoginPage.assertInventoryPageLoaded()
  })

  it('TC04 Invalid Data in One Field (username)', () => {
    LoginPage.visit()
    LoginPage.enterInvalidUserame('kreetika123')
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clickLogin()
    LoginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })

    it('TC04 Invalid Data in One Field (password)', () => {
    LoginPage.visit()
    LoginPage.enterInvalidUserame(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword('kreetika')
    LoginPage.clickLogin()
    LoginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })

  it('TC05 Invalid data in both field', () => {
    LoginPage.visit()
    LoginPage.enterInvalidUserame('kreetika123')
    LoginPage.enterPassword( 'dfsdfdsfds')
    LoginPage.clickLogin()
    LoginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })

   it('TC06 Empty login submission', () => {
    LoginPage.visit()
    LoginPage.clickLogin()
    LoginPage.checkEmptyLoginError()

  })

  
   
})
