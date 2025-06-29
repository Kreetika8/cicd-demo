
class assertionHelper {
  assertPlaceholder(selector: string, placeholder: string) {
    cy.get(selector).should('have.attr', 'placeholder', placeholder);
  }

  assertMsg(selector: string, message: string) {
    cy.get(selector).should('be.visible').and('contain.text', message);
  }

  assertUrlIncludes(expectedPart: string) {
    cy.url().should('include', expectedPart);
  }

  assertVisible(selector: string) {
    return cy.get(selector).should('be.visible');
  }

  assertContains(item: string, text: string) {
    cy.contains(item, text).should('be.visible');
  }

  assertNotExist(selector: string) {
    cy.get(selector).should('not.exist');
  }

  assertHaveText(selector: string, text: string) {
    cy.get(selector).should('have.text', text);
  }

  assertLink(selector: string, link: string) {
    cy.get(selector)
      .should('have.attr', 'href')
      .and('include', link);
  }

}


export default new assertionHelper();






