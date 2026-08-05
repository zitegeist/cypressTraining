// Custom commands — add yours here.
// // Example: cy.login() defined below is available in every test file.
//
// Usage:
//   cy.login('student@example.com', 'password123')
Cypress.Commands.add('visitLoginPage', () => {
  cy.visit('/login')
  cy.url().should('include', '/login')
})

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('/')
})

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('clearBasket', () => {
  cy.contains('Cart').click()
  cy.get('body').then(($body) => {
    if ($body.find('.cart_quantity_delete').length) {
      cy.get('.cart_quantity_delete').click({ multiple: true })
    }
  })
  cy.contains('Cart is empty!').should('be.visible')
  cy.contains('Home').click()
})

Cypress.Commands.add('addToBasket', (productId: string) => {
  cy.get(`[data-product-id="${productId}"]`).first().click()
  cy.get('#cartModal').should('be.visible')
  cy.contains('Added!').should('be.visible')
})

Cypress.Commands.add('addToBasketAndViewCart', (productId: string) => {
  cy.addToBasket(productId)
  cy.get('#cartModal').contains('View Cart').click()
  cy.url().should('include', '/view_cart')
})

// Extend the Cypress type system so TypeScript knows about cy.simpleLogin()
export {} // makes this file a module so `declare global` is allowed

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      clearBasket(): Chainable<void>
      visitLoginPage(): Chainable<void>
      visitHomePage(): Chainable<void>
      addToBasket(productId: string): Chainable<void>
      addToBasketAndViewCart(productId: string): Chainable<void>
    }
  }
}
