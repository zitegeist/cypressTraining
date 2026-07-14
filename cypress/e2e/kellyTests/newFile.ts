Cypress.Commands.add('simpleLogin', () => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type('Kelly_oconnell88@icloud.com')
  cy.get('[data-qa="login-password"]').type('Comtec123!')
  cy.get('[data-qa="login-button"]').click()
})
