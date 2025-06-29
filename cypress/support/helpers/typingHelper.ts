class typingHelper{

typeIntoInput(selector: string, text: string): void {
  cy.get(selector)
    .should('be.visible')   
    .clear()
    .type(text);
}

}
export default new typingHelper();