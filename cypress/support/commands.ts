// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('addItemAndCheckCart', () => {
  
//     cy.get(inventoryPage.btn_inventory).each(($btn, index) => {
//       cy.wrap($btn).should('have.text', 'Add to cart').click()

//       const expectedCount = (index + 1).toString()
//       cy.get(this.cartBadge).should('have.text', expectedCount)
//     }).then(($buttons) => {
//       const total = $buttons.length;

//       cy.get(this.btn_inventory).each(($btn, index) => {
//         cy.wrap($btn).should('have.text', 'Remove').click()

//         const remaining = total - (index + 1);
//       });
//     })
  
// });

// declare namespace Cypress {
//   interface Chainable {
//     /**
//      * Custom command to add item and check cart count increases by 1
//      */
//     addItemAndCheckCart(): Chainable<void>;
//   }
// }

// import InventoryPage from '../path/to/inventoryPage';

// const inventoryPage = new InventoryPage();

