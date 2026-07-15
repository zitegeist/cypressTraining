// Custom commands — add yours here.
// // Example: cy.login() defined below is available in every test file.
//
// Usage:
//   cy.login('student@example.com', 'password123')

Cypress.Commands.add('simpleLogin', () => {
//Navigate to Login Page before each test
  cy.visit('/login')
//Verify URL contains /login
  cy.url().should('include', '/login')
//Enter valid email and password and click login button
  cy.get('[data-qa="login-email"]').type('chris.wall@inspiretec.com')
  cy.get('[data-qa="login-password"]').type('Comtec123!')
  cy.get('[data-qa="login-button"]').click()
})

// Extend the Cypress type system so TypeScript knows about cy.simpleLogin()
export {} // makes this file a module so `declare global` is allowed

declare global {
  namespace Cypress {
    interface Chainable {
      simpleLogin(): Chainable<void>
    }
  }
}
