import cartPage from './cart';
import assertionHelper from '../helpers/assertionHelper';
import clickAction from '../helpers/actionHelper';

class checkoutFinalPage {
  private readonly itenName = '[data-test="inventory-item-name"]';
  private readonly itemdesc = '[data-test="inventory-item-desc"]';
  private readonly itemPrice = '[data-test="inventory-item-price"]';

  private readonly cancelBtn = '[data-test="cancel"]';
  private readonly FinishBtn = '[data-test="finish"]';

  checkoutUI(): this {
    cy.get(cartPage.cartItems).each((item, index) => {
      assertionHelper.assertVisible(this.itenName);
      assertionHelper.assertVisible(this.itemdesc);
      assertionHelper.assertVisible(this.itemPrice);

      // cy.wrap(item).find(this.itenName).should('be.visible');
      // cy.wrap(item).find(this.itemdesc).should('be.visible');
      // cy.wrap(item).find(this.itemPrice).should('be.visible');
    });
    return this
  }

  clickFinisheBtn(): this {
    clickAction.clickElement(this.FinishBtn);
    assertionHelper.assertUrlIncludes('/checkout-complete.html')
    // cy.get(this.FinishBtn).should('be.visible').click();
    // cy.url().should('include', '/checkout-complete.html');
    return this
  }

  clickCancelBtn(): this {
    clickAction.clickElement(this.cancelBtn);
    assertionHelper.assertUrlIncludes('/inventory.html')

    // cy.get(this.cancelBtn).should('be.visible').click();
    // cy.url().should('include', '/inventory.html');
    return this;
  }

  checkTotalPrice(): this {
    let subtotal = 0;
    cy.get(cartPage.cartItems).each((item, index) => {
      cy.wrap(item).find(this.itemPrice).should('be.visible').invoke('text').then((priceText) => {
        const price = parseFloat(priceText.replace('$', ''));
        subtotal += price;
      });
    }).then(() => {
      cy.get('[data-test="subtotal-label"]').invoke('text').then((subTotalText) => {
        const displayedSubtotal = parseFloat(subTotalText.replace('Item total: $', ''));
        expect(displayedSubtotal).to.equal(subtotal);
      })

      cy.get('[data-test="tax-label"]')
        .invoke('text')
        .then((taxText) => {
          const tax = parseFloat(taxText.replace(/[^0-9.]/g, ''));
          const expectedTotal = +(subtotal + tax).toFixed(2);

          cy.get('[data-test="total-label"]')
            .invoke('text')
            .then((totText) => {
              const displayedTotal = parseFloat(totText.replace(/[^0-9.]/g, ''));
              expect(displayedTotal).to.equal(expectedTotal);
            });
        });
    })
    return this
  }

}



export default new checkoutFinalPage();