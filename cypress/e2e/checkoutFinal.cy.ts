import LoginPage from '../pages/LoginPage';
import cartPage from '../pages/cart';
import checkoutPage from '../pages/checkout';
import checkoutFinalPage from '../pages/checkoutFinal';

describe('Cart Page', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clickLogin()
  })

  it('TC01 - Verify the UI Elements', () => {
    cartPage.addItemsToCart(2);
    cartPage.visitCartPage();
    cartPage.checkoutBtnClick();
    checkoutPage.validFieldDataEntry();
    checkoutPage.clickContinueBtn();
    cy.url().should('include', '/checkout-step-two.html');
    checkoutFinalPage.checkoutUI();
  })

  it('TC02 - Check price', () => {
    cartPage.addItemsToCart(2);
    cartPage.visitCartPage();
    cartPage.checkoutBtnClick();
    checkoutPage.validFieldDataEntry();
    checkoutPage.clickContinueBtn();
    cy.url().should('include', '/checkout-step-two.html');
    checkoutFinalPage.checkTotalPrice();
  })

  it('TC03 - Verify Finish Button', () => {
    cartPage.addItemsToCart(1);
    cartPage.visitCartPage();
    cartPage.checkoutBtnClick();
    checkoutPage.validFieldDataEntry();
    checkoutPage.clickContinueBtn();
    cy.url().should('include', '/checkout-step-two.html');
    checkoutFinalPage.clickFinisheBtn();
    cy.url().should('include', '/checkout-complete.html');
  })


  it('TC04 - Verify Cancel Button', () => {
    cartPage.addItemsToCart(1);
    cartPage.visitCartPage();
    cartPage.checkoutBtnClick();
    checkoutPage.validFieldDataEntry();
    checkoutPage.clickContinueBtn();
    cy.url().should('include', '/checkout-step-two.html');
    checkoutFinalPage.clickCancelBtn();
    cy.url().should('include', '/inventory.html');
  })


})