class LoginPage {
  private readonly usernameInput = '[data-test="username"]';
  private readonly passwordInput = '[data-test="password"]';
  private readonly loginButton = '[data-test="login-button"]';
  private readonly errorMessage = '[data-test="error"]';


  visit(): void {
    cy.visit('/')
  }

  checkLoginPageElementsVisible(): this {
    cy.get(this.usernameInput).should('be.visible')
    cy.get(this.passwordInput).should('be.visible')
    cy.get(this.loginButton).should('be.visible')
    return this;
  }

  checkPlaceholders(): this {
    cy.get(this.usernameInput).should('have.attr', 'placeholder', 'Username')
    cy.get(this.passwordInput).should('have.attr', 'placeholder', 'Password')
    return this;

  }

  checkErrorMessage(expectedText: string): this {
    cy.get(this.errorMessage).should('be.visible').and('contain.text', expectedText)
    return this
  }

  checkEmptyLoginError(): this {
    cy.get(this.errorMessage)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required')
    return this
  }

  clearFields(): this {
    cy.get(this.usernameInput).clear()
    cy.get(this.passwordInput).clear()
    return this
  }


  //ASERTIONS
  assertInventoryPageLoaded(): void {
    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('exist').and('be.visible')
  }


  //Typing
  enterUsername(username: string): void {
    cy.get(this.usernameInput).should('be.visible').clear().type(username)
  }

  enterPassword(password: string): void {
    cy.get(this.passwordInput).should('be.visible').clear().type(password)
  }

  enterInvalidUserame(username: string): this {
    cy.get(this.usernameInput).clear().type(username)
    return this
  }

  enterInlavalidPassword(password: string): this {
    cy.get(this.passwordInput).clear().type(password)
    return this
  }


  //Click
  clickLogin(): void {
    cy.get(this.loginButton).should('be.visible').click()
  }
}

export default new LoginPage()
