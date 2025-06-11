class inventoryPage {
  private readonly header = '.header_label';
  private readonly footer = '.footer';
  private readonly productList = '.inventory_list';
  private readonly products = '.inventory_item';
  private readonly btn_inventory = '.btn_inventory';
  private readonly productImg = '.inventory_item_img'

  private readonly productDetailUrl = '/inventory-item.html?id=';
  readonly productTitle = '[data-test="inventory-item-name"]';
  readonly productPrice = '[data-test="inventory-item-price"]';
  private readonly productDesc = '[data-test="inventory-item-desc"]';
  private readonly productDetailImg = '.inventory_details_img';

  private readonly cartBadge = '.shopping_cart_badge';
  private readonly backBtn = '[data-test="back-to-products"]';

private readonly productSortDropdown = '.product_sort_container';

  assertInventoryPageVisibility(): this {
    cy.url().should('include', '/inventory')
    cy.get(this.header).should('be.visible')
    cy.get(this.footer).should('be.visible')
    cy.get(this.productList).should('be.visible')
    cy.get(this.products).should('have.length.at.least', 1)
    return this
  }

  assertProductDetails(): this {
    cy.get(this.products).each((item) => {
      cy.wrap(item).find(this.productTitle).should('be.visible')
      cy.wrap(item).find(this.productDesc).should('be.visible')
      cy.wrap(item).find(this.productPrice).should('be.visible')
      cy.wrap(item).find(this.productImg).should('be.visible')
      cy.wrap(item).find('button').contains('Add to cart').should('be.visible')
    })
    return this
  }

  clickFilterButton(): this {
        cy.get(this.productSortDropdown).should("be.enabled").click();
        return this;
    }
    selectFilterOption(option: string): this{
        cy.get(this.productSortDropdown).should('be.visible').select(option)
        return this
    }


  ProductVisibilityOnLoggedOut(): this {
    cy.visit('/inventory.html', { failOnStatusCode: false });
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', "Epic sadface: You can only access '/inventory.html' when you are logged in.");
    return this;
  }

  addRemoveProductToCart(): this {
    cy.get(this.btn_inventory).each(($btn, index) => {
      cy.wrap($btn).should('have.text', 'Add to cart').click()
      const expectedCount = (index + 1).toString()
      cy.get(this.cartBadge).should('have.text', expectedCount)
    }).then(($buttons) => {
      const total = $buttons.length;

      cy.get(this.btn_inventory).each(($btn, index) => {
        cy.wrap($btn).should('have.text', 'Remove').click()
        const remaining = total - (index + 1);

        if (remaining > 0) {
          cy.get(this.cartBadge).should('have.text', remaining.toString());
        } else {
          cy.get(this.cartBadge).should('not.exist');
        }
      });
    });
    return this
  }

  productDetailsTrigger(): this {
    cy.get(this.products).each((item, index) => {
      cy.get(this.products).eq(index).find(this.products).click()
      cy.url().should('include', this.productDetailUrl)
      cy.go('back');
    });
    return this;
  }
   productDetailsTriggeronItemName(): this {
    cy.get(this.products).each((item, index) => {
      cy.get(this.products).eq(index).find(this.productTitle).click()
      cy.url().should('include', this.productDetailUrl)
      cy.go('back');
    });
    return this;
  }

  productDetailCOntents(): this {
    cy.get(this.products).each((item, index) => {
      cy.get(this.products).eq(index).find(this.productTitle).click()
      cy.get(this.productDetailImg).should('be.visible');
      cy.get(this.productTitle).should('be.visible');
      cy.get(this.productDesc).should('be.visible');
      cy.get(this.productPrice).should('be.visible');
      cy.contains('button', 'Add to cart').should('be.visible');
      cy.go('back');
    });

    return this;
  }

  productDetailsAddToCart(): this {
    cy.get(this.products).each((item, index) => {
      cy.get(this.products).eq(index).find(this.productTitle).click()
      cy.contains('button', 'Add to cart').should('be.visible').click();
      cy.get(this.cartBadge).should('contain', '1');
      cy.contains('button', 'Remove').click();
      cy.get(this.cartBadge).should('not.exist');
      cy.go('back');
    });
    return this;
  }

  productDetaisBackBtn(): this {
    cy.get(this.products).each((item, index) => {
      cy.get(this.products).eq(index).find(this.productTitle).click()
      cy.get(this.backBtn).click()
    });
    return this;
  }

  eachProductDetails() {
    cy.get(this.products).each((item, index) => {
      cy.get(this.products).eq(index).find(this.productTitle).click()
      cy.url().should('include', this.productDetailUrl)
      cy.get(this.productImg).should('be.visible');
      cy.get(this.productTitle).should('be.visible');
      cy.get(this.productDesc).should('be.visible');
      cy.get(this.productPrice).should('be.visible');
      cy.contains('button', 'Add to cart').should('be.visible').click();
      cy.get(this.cartBadge).should('contain', '1');
      cy.contains('button', 'Remove').click();
      cy.get(this.cartBadge).should('not.exist');
      cy.go('back');
    });
    return this;
  }

  checkInvalidProduct(id: number): this {
    cy.url().should('include', '/inventory');
    cy.visit(`/inventory-item.html?id=${id}`, { failOnStatusCode: false });
    cy.contains('ITEM NOT FOUND').should('be.visible');
    cy.contains('button', 'Add to cart').should('have.attr', 'disabled');
    return this;
  }

}

export default new inventoryPage();

