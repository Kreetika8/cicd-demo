import LoginPage from '../pages/LoginPage';
import cartPage from '../pages/cart';

describe('Cart', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clickLogin()
  })

  it('TC01 - Verify the UI of cart page', () => {
    cartPage.addItemsToCart(2);
    cartPage.visitCartPage();
    cartPage.itemDetailsCartPage()
  })

  it('TC02 - Verify Cart Item Display', () => {
    cartPage.addItemsToCart(1);
    cartPage.visitCartPage();
    cartPage.itemDetailsCartPage();
    cartPage.itemCOntentDetailsCartPage();
  })

  it('TC03  - Remove cart items', () => {
    cartPage.addItemsToCart(1);
    cartPage.visitCartPage();
    cartPage.removeCartItems();
  })

  it('TC03  - Remove cart items', () => {
    cartPage.addItemsToCart(1);
    cartPage.visitCartPage();
    cartPage.clickRemoveBtn();
    cy.get(cartPage.cartBadge).should('not.exist');
  })

  it('TC04 - Verify continue-shopping Button is clickable', () => {
    cartPage.visitCartPage();
    cartPage.continueShoppingBtnClick();
  })

  it('TC05 - Verify Checkout Button is clickable', () => {
    cartPage.visitCartPage();
    cartPage.checkoutBtnClick();
  })

  it('TC06 - Empty  cart behaviour', () => {
    cartPage.visitCartPage();
    cy.get(cartPage.cartBadge).should('not.exist');
    cy.get(cartPage.cartItems).should('not.exist');
    cy.contains('Your cart is empty').should('be.visible');
  })

  it('TC07 - Empty  cart submission', () => {
    cartPage.visitCartPage();
    cy.get(cartPage.cartItems).should('not.exist');
    cy.get(cartPage.cartBadge).should('not.exist');
    cy.get('[data-test="checkout"]').should('be.visible').click();
    cy.url().should('include', '/cart.html');

  })



})