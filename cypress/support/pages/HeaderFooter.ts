import assertionHelper from '../helpers/assertionHelper'
import clickAction from '../helpers/actionHelper'
class heaaderFooterPage {

  readonly hamBurger = '.bm-burger-button';
  private readonly cart = '.shopping_cart_container';
  private readonly appLogo = '.app_logo';

  private readonly socialMediaIcons = '.social';
  private readonly twitter = '.social_twitter';
  private readonly facebook = '.social_facebook';
  private readonly linkedin = '.social_linkedin';
  private readonly copyright = '.footer_copy';

  readonly itemList = '.bm-item-list';
  private readonly inventoryItem = '#inventory_sidebar_link';
  private readonly resetItem = '#reset_sidebar_link';
  readonly logout = '#logout_sidebar_link';




  navVisibility(): this {
    assertionHelper.assertVisible(this.hamBurger);
    assertionHelper.assertVisible(this.appLogo);
    assertionHelper.assertVisible(this.cart);

    // cy.get(this.hamBurger).should('be.visible');
    // cy.get(this.appLogo).should('be.visible');
    // cy.get(this.cart).should('be.visible');
    return this
  }

  hamBurgerFunctionality(): this {
    clickAction.clickElement(this.hamBurger);
    assertionHelper.assertVisible(this.itemList);
    clickAction.clickElement(this.inventoryItem);
    clickAction.clickElement(this.resetItem);
    clickAction.clickElement(this.logout);


    // cy.get(this.hamBurger).click();
    // cy.get(this.itemList).should('be.visible');
    // cy.get(this.inventoryItem).click();
    // cy.get(this.resetItem).click();
    // cy.get(this.logout).click();
    return this;
  }

  appTitleVisibility(): this {
    assertionHelper.assertVisible(this.appLogo).and('have.text', 'Swag Labs').and('have.css', 'text-align', 'center');
    // cy.get(this.appLogo).should('be.visible').and('have.text', 'Swag Labs').and('have.css', 'text-align', 'center');
    return this;
  }

  CartNavigation(): this {
    assertionHelper.assertVisible(this.cart);
    clickAction.clickElement(this.cart);
    assertionHelper.assertUrlIncludes('/cart.html')

    // cy.get(this.cart).should('be.visible');
    // cy.get(this.cart).click();
    // cy.url().should('include', '/cart.html');

    return this;
  }

  footerVisibility(): this {
    assertionHelper.assertVisible(this.socialMediaIcons);
    assertionHelper.assertVisible(this.twitter);
    assertionHelper.assertVisible(this.facebook);
    assertionHelper.assertVisible(this.linkedin);

    // cy.get(this.socialMediaIcons).should('be.visible');
    // cy.get(this.twitter).should('be.visible');
    // cy.get(this.facebook).should('be.visible');
    // cy.get(this.linkedin).should('be.visible');
    return this;
  }

  footerLink(): this {
    assertionHelper.assertLink(this.twitter, 'twitter.com')
    assertionHelper.assertLink(this.facebook, 'facebook.com')
    assertionHelper.assertLink(this.linkedin, 'linkedin.com')

    // cy.get(this.twitter)
    //   .should('have.attr', 'href')
    //   .and('include', 'twitter.com');

    // cy.get(this.facebook)
    //   .should('have.attr', 'href')
    //   .and('include', 'facebook.com');

    // cy.get(this.linkedin)
    //   .should('have.attr', 'href')
    //   .and('include', 'linkedin.com');
    return this;
  }

  verifyCopyright(): this {
    assertionHelper.assertMsg(this.copyright, '2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    // cy.get(this.copyright).should('be.visible').and('contain.text', '2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    return this;
  }
}

export default new heaaderFooterPage();