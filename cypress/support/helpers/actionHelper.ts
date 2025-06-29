class clickAction{

clickElement(selector: string) {
 return  cy.get(selector).should('be.visible').click();
}

clickBtn(text:string){
  cy.contains('button', text).should('be.visible').click();
}

}


      // cy.wrap(item).find('button').contains('Add to cart').should('be.visible')

      export default new clickAction();