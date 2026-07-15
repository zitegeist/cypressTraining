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

Cypress.Commands.add('clearBasket', () => {
  cy.contains('Cart').click()
  cy.get('.cart_quantity_delete').click({ multiple: true })
  cy.contains('Cart is empty!').should('be.visible')
  cy.contains('Home').click()
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
