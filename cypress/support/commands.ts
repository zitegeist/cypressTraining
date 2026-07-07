// Custom commands — add yours here.
// Example: cy.login() defined below is available in every test file.
//
// Usage:
//   cy.login('student@example.com', 'password123')

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('getIframeBody', (selector: string) => {
  return cy
    .get(selector, { timeout: 180000 })
    .its('0.contentDocument.body', { timeout: 180000 })
    .should('not.be.empty')
    .then(cy.wrap) as Cypress.Chainable<JQuery<HTMLBodyElement>>
})

// Extend the Cypress type system so TypeScript knows about cy.login()
export {} // makes this file a module so `declare global` is allowed
