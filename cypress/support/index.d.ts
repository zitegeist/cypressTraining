/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>

    /** Returns the body of a same-origin iframe, ready for .within() or .find() */
    getIframeBody(selector: string): Chainable<JQuery<HTMLBodyElement>>
  }
}
