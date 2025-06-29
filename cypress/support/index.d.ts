// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in
     */
    login(username: string, password: string): Chainable<void>;
  }
}