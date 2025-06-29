import clickAction from '../helpers/actionHelper';
import assertionHelper from '../helpers/assertionHelper'

import productPage from '../pages/ProductPage';

class cartPage {
  private readonly btn_inventory = '.btn_inventory';
  readonly cartBadge = '.shopping_cart_badge';
  readonly cartItems = '.cart_item'
  private readonly itenName = '[data-test="inventory-item-name"]';

  private readonly itemdesc = '[data-test="inventory-item-desc"]';
  private readonly itemPrice = '[data-test="inventory-item-price"]';

  private readonly cartIcon = '.shopping_cart_container';
  private readonly checkOut = '[data-test="checkout"]';
  private readonly continueShopping = '[data-test="continue-shopping"]';

  //adding more than 6 product will only add 6 product as the page only contains 6 products
  addItemsToCart(count: number): this {
    if (count <= 0) {
      throw new Error('Item count must be a positive number.');
    }
    cy.get(this.btn_inventory).each(($btn, index) => {
      if (index < count) {
       clickAction.clickBtn('Add to cart')

        //cy.wrap($btn).should('have.text', 'Add to cart').click()
        const expectedCount = (index + 1).toString()
       assertionHelper.assertHaveText(this.cartBadge,expectedCount)
        //cy.get(this.cartBadge).should('have.text', expectedCount)
      }
    })
    return this
  }

  
  visitCartPage(): this {
    clickAction.clickElement(this.cartIcon);
    // cy.get(this.cartIcon).click();
    return this;
  }

  viewRemoveCartItems(): this {
    cy.get(this.cartItems).each((item, index) => {

      cy.wrap(item).find('button').contains('Remove').should('be.visible')
    });
    return this;
  }

  clickRemoveBtn(): this {
    cy.get(this.cartItems).each((item, index) => {
            clickAction.clickBtn('Remove')

      // cy.wrap(item).find('button').contains('Remove').should('be.visible').click();
    });
    return this;
  }


  itemDetailsCartPage(): this {
    cy.get(this.cartItems).each((item, index) => {

     assertionHelper.assertVisible(this.itenName);
     assertionHelper.assertVisible(this.itemdesc);
     assertionHelper.assertVisible(this.itemPrice);

      // cy.wrap(item).find(this.itenName).should('be.visible');
      // cy.wrap(item).find(this.itemdesc).should('be.visible');
      // cy.wrap(item).find(this.itemPrice).should('be.visible');
      this.viewRemoveCartItems();
    });
    return this;
  }


  itemCOntentDetailsCartPage(): this {
    cy.get(this.cartItems).each((item, index) => {
      cy.wrap(item).find(this.itenName).should('be.visible').invoke('text')
        .should('match', /^\S+.*/);
      cy.wrap(item).find(this.itemdesc).should('be.visible').invoke('text')
        .should('match', /^\S+.*/);
      cy.wrap(item).find(this.itemPrice).should('be.visible').invoke('text')
        .should('match', /^\$\d+\.\d{2}$/);
    });
    return this;
  }

  continueShoppingBtnClick(): this {
    clickAction.clickElement(this.continueShopping)

    assertionHelper.assertUrlIncludes('/inventory.html');
    //cy.get('[data-test="continue-shopping"]').should('be.visible').click();
    // cy.url().should('include', '/inventory.html');
    return this;
  }

  checkoutBtnClick(): this {
    clickAction.clickElement(this.checkOut);
    assertionHelper.assertUrlIncludes('/checkout-step-one.html');

    // cy.get(this.checkOut).should('be.visible').click();
    // cy.url().should('include', '/checkout-step-one.html');
    return this;
  }

}

export default new cartPage();