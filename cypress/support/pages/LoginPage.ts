import { faker } from '@faker-js/faker';
import assertions from '../helpers/assertionHelper';

import clickAction from '../helpers/actionHelper';
import typingHelper from '../helpers/typingHelper';

class LoginPage {
  private readonly usernameInput = '[data-test="username"]';
  private readonly passwordInput = '[data-test="password"]';
  private readonly loginButton = '[data-test="login-button"]';
  private readonly errorMessage = '[data-test="error"]';


  visit(): void {
    cy.visit('/')
  }

  checkLoginPageElementsVisible(): this {
    assertions.assertVisible(this.usernameInput);
    assertions.assertVisible(this.passwordInput);
    assertions.assertVisible(this.loginButton);

    // cy.get(this.usernameInput).should('be.visible')
    // cy.get(this.passwordInput).should('be.visible')
    // cy.get(this.loginButton).should('be.visible')
    return this;
  }

  checkPlaceholders() {
    assertions.assertPlaceholder(this.usernameInput, 'Username');
    assertions.assertPlaceholder(this.passwordInput, 'Password');

    // cy.get(this.usernameInput).should('have.attr', 'placeholder', 'Username')
    // cy.get(this.passwordInput).should('have.attr', 'placeholder', 'Password')

  }

  checkErrorMessage(expectedText: string): this {
    assertions.assertMsg(this.errorMessage, expectedText)
    // cy.get(this.errorMessage).should('be.visible').and('contain.text', expectedText)
    return this
  }

  checkEmptyLoginError(): this {
    assertions.assertMsg(this.errorMessage, 'Epic sadface: Username is required')
    // cy.get(this.errorMessage)
    //   .should('be.visible')
    //   .and('contain.text', 'Epic sadface: Username is required')
    return this
  }

  clearFields(): this {
    cy.get(this.usernameInput).clear()
    cy.get(this.passwordInput).clear()
    return this
  }


  //ASERTIONS
  assertInventoryPageLoaded(): void {
    assertions.assertUrlIncludes('/inventory')
    // cy.url().should('include', '/inventory')

    cy.get('.inventory_list').should('exist').and('be.visible')
  }


  //Typing
  enterUsername(username: string): void {
    typingHelper.typeIntoInput(this.usernameInput, username)
    // cy.get(this.usernameInput).should('be.visible').clear().type(username)
  }

  enterPassword(password: string): void {
    typingHelper.typeIntoInput(this.passwordInput, password)
    // cy.get(this.passwordInput).should('be.visible').clear().type(password)
  }

  enterInvalidUsername(username: string = faker.internet.username()): this {
    typingHelper.typeIntoInput(this.usernameInput, username)
    // cy.get(this.usernameInput).clear().type(username);
    return this;
  }

  enterInvalidPassword(password: string = faker.internet.password()): this {
    typingHelper.typeIntoInput(this.passwordInput, password)

    // cy.get(this.passwordInput).clear().type(password);
    return this;
  }


  //Click
  // clickElement{
  //   cy.get(this.loginButton).click()
  // }
  clickLogin() {
    clickAction.clickElement(this.loginButton);
  }
}

export default new LoginPage()
