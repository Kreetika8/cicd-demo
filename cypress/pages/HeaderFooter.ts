class heaaderFooterPage {

  private readonly hamBurger = '.bm-burger-button';
  private readonly cart = '.shopping_cart_container';
  private readonly appLogo = '.app_logo';

  private readonly socialMediaIcons = '.social';
  private readonly twitter = '.social_twitter';
  private readonly facebook = '.social_facebook';
  private readonly linkedin = '.social_linkedin';
  private readonly copyright = '.footer_copy';


  navVisibility(): this {
    cy.get(this.hamBurger).should('be.visible');
    cy.get(this.appLogo).should('be.visible');
    cy.get(this.cart).should('be.visible');
    return this
  }

  hamBurgerFunctionality(): this {
  cy.get(this.hamBurger).click();
  cy.get('.bm-item-list').should('be.visible');
  cy.get('#inventory_sidebar_link').click();
  cy.get('#reset_sidebar_link').click();
  cy.get('#logout_sidebar_link').click();
  return this;
}

  appTitleVisibility(): this {
    cy.get(this.appLogo).should('be.visible').and('have.text', 'Swag Labs').and('have.css', 'text-align', 'center');
    return this;
  }

  CartNavigation(): this {
    cy.get(this.cart).should('be.visible');
    cy.get(this.cart).click();
    cy.url().should('include', '/cart.html');

    return this;
  }

  footerVisibility(): this {
    cy.get(this.socialMediaIcons).should('be.visible');
    cy.get(this.twitter).should('be.visible');
    cy.get(this.facebook).should('be.visible');
    cy.get(this.linkedin).should('be.visible');
    return this;
  }

  footerLink(): this {
    cy.get(this.twitter) 
      .should('have.attr', 'href')
      .and('include', 'twitter.com');

    cy.get(this.facebook)
      .should('have.attr', 'href')
      .and('include', 'facebook.com');

    cy.get(this.linkedin)
      .should('have.attr', 'href')
      .and('include', 'linkedin.com');
    return this;
  }

  verifyCopyright(): this {
    cy.get(this.copyright).should('be.visible').and('contain.text', '2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    return this;
  }
}

export default new heaaderFooterPage();