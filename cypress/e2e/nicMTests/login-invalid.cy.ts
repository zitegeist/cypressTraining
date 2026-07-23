describe('Login Tests', () => {
  it('Login - successful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
      cy.contains('Logout').should('be.visible')
    })
  })
  it('Login - unsuccessful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.invalidUser.email, users.invalidUser.password)
      cy.contains('Login').should('be.visible')
    })
  })
})
