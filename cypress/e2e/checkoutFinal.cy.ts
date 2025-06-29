import LoginPage from '../support/pages/LoginPage';
import cartPage from '../support/pages/cart';
import checkoutPage from '../support/pages/checkout';
import checkoutFinalPage from '../support/pages/checkoutFinal';

describe('Cart Page', () => {
  beforeEach(() => {
    LoginPage.visit()
    // LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    // LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    // LoginPage.clickLogin()
    cy.login(Cypress.env("DEFAULT_USERNAME"),Cypress.env("DEFAULT_PASSWORD"));

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