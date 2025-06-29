import LoginPage from '../support/pages/LoginPage';
import logoutPage from '../support/pages/logout';
import headerFooterPage from '../support/pages/HeaderFooter';


describe('Login Test', () => {
  beforeEach(() => {
    LoginPage.visit()

    cy.login(Cypress.env("DEFAULT_USERNAME"), Cypress.env("DEFAULT_PASSWORD"));
  })

  it('TC01 - Logout Confirmation', () => {
    cy.get(headerFooterPage.hamBurger).click();
    cy.get(headerFooterPage.itemList).should('be.visible');
    cy.get(headerFooterPage.logout).click();
    cy.url().should('include', 'saucedemo.com');
  })

  it('TC02 - Session Expire', () => {
    cy.get(headerFooterPage.hamBurger).click();
    cy.get(headerFooterPage.itemList).should('be.visible');
    cy.get(headerFooterPage.logout).click();
    cy.url().should('include', 'saucedemo.com');
    cy.go('back');
    cy.url().should('include', 'saucedemo.com');
  })

  it('TC03 - Lgout from all tabs', () => {

  })


})