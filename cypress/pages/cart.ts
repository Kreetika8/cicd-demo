import productPage from '../pages/ProductPage';

class cartPage {
  private readonly btn_inventory = '.btn_inventory';
  readonly cartBadge = '.shopping_cart_badge';
  readonly cartItems = '.cart_item'
  private readonly itenName = '[data-test="inventory-item-name"]';

  private readonly itemdesc = '[data-test="inventory-item-desc"]';
  private readonly itemPrice = '[data-test="inventory-item-price"]';

  private readonly cartIcon = '.shopping_cart_container'


  addItemsToCart(count: number): this {
    cy.get(this.btn_inventory).each(($btn, index) => {
      if (index < count) {
        cy.wrap($btn).should('have.text', 'Add to cart').click()
        const expectedCount = (index + 1).toString()
        cy.get(this.cartBadge).should('have.text', expectedCount)
      }
    })
    return this
  }

  visitCartPage(): this {
    cy.get(this.cartIcon).click();
    // cy.visit('/cart.html', { failOnStatusCode: false })
    return this;
  }

  removeCartItems(): this {
    cy.get(this.cartItems).each((item, index) => {
      cy.wrap(item).find('button').contains('Remove').should('be.visible');
    });
    return this;
  }

  clickRemoveBtn(): this {
    cy.get(this.cartItems).each((item, index) => {
      cy.wrap(item).find('button').contains('Remove').should('be.visible').click();
    });
    return this;
  }


  itemDetailsCartPage(): this {
    cy.get(this.cartItems).each((item, index) => {
      cy.wrap(item).find(this.itenName).should('be.visible');
      cy.wrap(item).find(this.itemdesc).should('be.visible');
      cy.wrap(item).find(this.itemPrice).should('be.visible');
      this.removeCartItems();
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
    cy.get('[data-test="continue-shopping"]').should('be.visible').click();
    cy.url().should('include', '/inventory.html');
    return this;
  }

  checkoutBtnClick(): this {
    cy.get('[data-test="checkout"]').should('be.visible').click();
    cy.url().should('include', '/checkout-step-one.html');
    return this;
  }

}

export default new cartPage();