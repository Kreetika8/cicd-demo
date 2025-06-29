import LoginPage from '../support/pages/LoginPage';
import ProductPage from '../support/pages/ProductPage';
import inventoryPage from '../support/pages/ProductPage';

describe('Inventory Page', () => {
  beforeEach(() => {
    LoginPage.visit()

    cy.login(Cypress.env("DEFAULT_USERNAME"),Cypress.env("DEFAULT_PASSWORD"));
  })

  it('TC01 - Ensure inventory page loads successfully', () => {
    ProductPage.assertInventoryPageVisibility()
  })

  it('TC02 - Verify product list is displayed', () => {
    ProductPage.assertProductDetails()
  })

  it('TC03 - Verify sort dropdown is functional', () => {
    ProductPage.selectFilterOption('az');
    cy.get(inventoryPage.productTitle)
      .then($items => {
        const names = Array.from($items).map(el => el.innerText.trim());
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        expect(names).to.deep.equal(sortedNames);
      });

    ProductPage.selectFilterOption('za');
    cy.get(inventoryPage.productTitle)
      .then($items => {
        const names = Array.from($items).map(el => el.innerText.trim());
        const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
        expect(names).to.deep.equal(sortedNames);
      });

    ProductPage.selectFilterOption('lohi');
    cy.get(inventoryPage.productPrice)
      .then($prices => {
        const prices = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '').trim()));
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices);
      });

    ProductPage.selectFilterOption('hilo');
    cy.get(inventoryPage.productPrice)
      .then($prices => {
        const prices = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '').trim()));
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(sortedPrices);
      });
  })

  it('TC04 - Verify Add to Cart Button functionality', () => {
    ProductPage.addRemoveProductToCart()
  })


  it('TC06 - Verify product detail opens on click', () => {
    ProductPage.productDetailsTriggeronItemName();
    ProductPage.productDetailsTrigger();
  })

  it('TC07 - Verify product detail contents', () => {
    ProductPage.productDetailCOntents()
  })

  it('TC08 - Verify “Add to Cart” on product details page', () => {
    ProductPage.productDetailsAddToCart()
  })

  it('TC09 - Verify Back button on product details', () => {
    ProductPage.productDetaisBackBtn()
  })

  it('TC10 - Check system handling for invalid product IDs', () => {
    ProductPage.checkInvalidProduct(-1)
  })

  it('Check the contents of product using fixture data', () => {
  cy.fixture('firstProduct.json').then((product) => {
    cy.get(inventoryPage.products).first().find(inventoryPage.productTitle).click();
    cy.get(inventoryPage.productTitle).should('have.text', product.name);
    cy.get(inventoryPage.productPrice).should('have.text', product.price);
    cy.get(inventoryPage.productDesc).should('have.text', product.description);
  });
})

})


describe('Inventory Page - Not logged in ', () => {

  it('TC05 - Verify product visibility doesn’t work when not logged in', () => {
    ProductPage.ProductVisibilityOnLoggedOut();
  });

})