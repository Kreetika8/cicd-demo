class clickAction {

  clickElement(selector: string) {
    return cy.get(selector).should('be.visible').click();
  }

  clickBtn(text: string) {
    cy.contains('button', text).should('be.visible').click();
  }

}

export default new clickAction();