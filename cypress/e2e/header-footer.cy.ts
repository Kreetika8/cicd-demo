import LoginPage from '../pages/LoginPage';
import heaaderFooterPage from '../pages/HeaderFooter';

describe('Header', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clickLogin()
  })

  it('TC01 - Verify navbar visiblity', () => {
    heaaderFooterPage.navVisibility();
  })
  
  it('TC02 - Hamburger Menu Functionality', () => {
   heaaderFooterPage.hamBurgerFunctionality();
  })

  it('TC03 - Verify App title is visible and centered', () => {
    heaaderFooterPage.appTitleVisibility();
  })

   it('TC04 - Verify Check Cart Icon Navigation', () => {
    heaaderFooterPage.CartNavigation();
  })

})


describe('Footer', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clickLogin()
  })

  it('TC05 - Verify footer  visiblity', () => {
    heaaderFooterPage.footerVisibility();
  })

   it('TC06 - Verify footer links functionality', () => {
    heaaderFooterPage.footerVisibility();
  })

   it('TC07 - Verify Copyright is displayed properly', () => {
    heaaderFooterPage.verifyCopyright();
  })

  
})