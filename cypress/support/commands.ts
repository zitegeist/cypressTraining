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

Cypress.Commands.add('simpleLogin', () => {
  cy.visit('/')
  cy.contains('Signup / Login').click()
  cy.get('[data-qa="login-email"]').type('james.oneill@inspiretec.com')
  cy.get('[data-qa="login-password"]').type('Comtec123!')
  cy.get('[data-qa="login-button"]').click()
})

// Extend the Cypress type system so TypeScript knows about cy.login()
export {} // makes this file a module so `declare global` is allowed

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      simpleLogin(): Chainable<void>
    }
  }
}
