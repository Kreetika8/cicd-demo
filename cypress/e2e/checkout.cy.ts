import LoginPage from '../pages/LoginPage';
import cartPage from '../pages/cart';
import checkoutPage from '../pages/checkout';
describe('Cart Page', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.enterUsername(Cypress.env('DEFAULT_USERNAME'))
    LoginPage.enterPassword(Cypress.env('DEFAULT_PASSWORD'))
    LoginPage.clickLogin()
    cartPage.visitCartPage();
    cartPage.checkoutBtnClick();
  })

  it('TC01 - Verify the UI of cart page', () => {
    checkoutPage.checkoutUI();
  })

  it('TC02 - Validate empty fields submission', () => {
    cy.url().should('include', '/checkout-step-one.html');
    checkoutPage.clickContinueBtn();
    cy.url().should('include', '/checkout-step-one.html');
    checkoutPage.emptyfielderror();
  })

  it('TC03 - Test invalid characters in First Name', () => {
    cy.get(checkoutPage.firstName).type('1!@1');
    cy.get(checkoutPage.lastName).type('Doe');
    cy.get(checkoutPage.postalCode).type('1111');
    checkoutPage.clickContinueBtn();
    cy.get(checkoutPage.error).should('exist')
  })

  it('TC04 - Test invalid characters in Last Name', () => {
    cy.get(checkoutPage.firstName).type('Kreetiks');
    cy.get(checkoutPage.lastName).type('1!@1');
    cy.get(checkoutPage.postalCode).type('1111');
    checkoutPage.clickContinueBtn();
    cy.get(checkoutPage.error).should('exist')
  })

  it('TC04 - Test invalid characters in Zip/Postal Code', () => {
    cy.get(checkoutPage.firstName).type('Kreetiks');
    cy.get(checkoutPage.lastName).type('Bhetuwal');
    cy.get(checkoutPage.postalCode).type('aabb@@##');
    checkoutPage.clickContinueBtn();
    cy.get(checkoutPage.error).should('exist')
  })

  it('TC04 - Test invalid characters in Zip/Postal Code', () => {
    checkoutPage.validFieldDataEntry();
    checkoutPage.clickContinueBtn();
    cy.url().should('include', '/checkout-step-two.html');
  })

  it('TC04 - Test invalid characters in Zip/Postal Code', () => {
    checkoutPage.clickCancelBtn();
    cy.url().should('include', '/cart.html');
  })

  it('TC04 - Verify placeholder text in input fields', () => {
    checkoutPage.checkoutUIPlaceholder();
  })

})