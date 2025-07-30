import assertionHelper from '../helpers/assertionHelper';
import clickAction from '../helpers/actionHelper'
import typingHelper from '../helpers/typingHelper'
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

    assertionHelper.assertVisible(this.firstName);
    assertionHelper.assertVisible(this.lastName);
    assertionHelper.assertVisible(this.postalCode);
    assertionHelper.assertVisible(this.cancelBtn);
    assertionHelper.assertVisible(this.continueBtn);

    // cy.get(this.firstName).should('be.visible');
    // cy.get(this.lastName).should('be.visible');
    // cy.get(this.postalCode).should('be.visible');
    // cy.get(this.cancelBtn).should('be.visible');
    // cy.get(this.continueBtn).should('be.visible');
    return this
  }

  checkoutUIPlaceholder(): this {
    assertionHelper.assertPlaceholder(this.firstName, 'First Name')
    assertionHelper.assertPlaceholder(this.lastName, 'Last Name');
    assertionHelper.assertPlaceholder(this.postalCode, 'Zip/Postal Code')
    // cy.get(this.firstName).should('have.attr', 'placeholder');
    // cy.get(this.lastName).should('have.attr', 'placeholder');
    // cy.get(this.postalCode).should('have.attr', 'placeholder');
    return this;
  }

  clickContinueBtn(): this {
    clickAction.clickElement(this.continueBtn)
    // cy.get(this.continueBtn).should('be.visible').click();
    return this
  }

  clickCancelBtn(): this {
    clickAction.clickElement(this.cancelBtn)

    // cy.get(this.cancelBtn).should('be.visible').click();
    return this;
  }

  emptyfielderror(): this {
    assertionHelper.assertMsg(this.error, 'Error: First Name is required')
    // cy.get(this.error)
    //   .should('be.visible')
    //   .and('contain.text', 'Error: First Name is required')
    return this;
  }

  validFieldDataEntry(): this {
    typingHelper.typeIntoInput(this.firstName, 'Kreetika')
    typingHelper.typeIntoInput(this.lastName, 'Bhetuwal')
    typingHelper.typeIntoInput(this.postalCode, '2400')


    // cy.get(this.firstName).type('Kreetika');
    // cy.get(this.lastName).type('Bhetuwal');
    // cy.get(this.postalCode).type('2400')

    return this
  }

}

export default new checkoutPage();