
class checkoutPage {

  readonly firstName = '[data-test="firstName"]';
  readonly lastName = '[data-test="lastName"]';
  readonly postalCode = '[data-test="postalCode"]';
  private readonly cancelBtn = '[data-test="cancel"]';
  private readonly continueBtn = '[data-test="continue"]';
  readonly error = '[data-test="error"]';
  // private readonly f = '[data-test="error"]';






  checkoutUI(): this {
    cy.url().should('include', '/checkout-step-one.html');
    cy.get(this.firstName).should('be.visible');
    cy.get(this.lastName).should('be.visible');
    cy.get(this.postalCode).should('be.visible');
    cy.get(this.cancelBtn).should('be.visible');
    cy.get(this.continueBtn).should('be.visible');
    return this
  }

  checkoutUIPlaceholder(): this {
    cy.get(this.firstName).should('have.attr', 'placeholder');
    cy.get(this.lastName).should('have.attr', 'placeholder');
    cy.get(this.postalCode).should('have.attr', 'placeholder');
    return this;
  }

  clickContinueBtn(): this {
    cy.get(this.continueBtn).should('be.visible').click();
    return this
  }

  clickCancelBtn(): this {
    cy.get(this.cancelBtn).should('be.visible').click();
    return this;
  }

  emptyfielderror(): this {
    cy.get(this.error)
      .should('be.visible')
      .and('contain.text', 'Error: First Name is required')
    return this;
  }

  validFieldDataEntry(): this {
    cy.get(this.firstName).type('Kreetiks');
    cy.get(this.lastName).type('Bhetuwal');
    cy.get(this.postalCode).type('2400')

    return this
  }

}

export default new checkoutPage();