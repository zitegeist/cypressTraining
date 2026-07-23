describe('Login Tests', () => {
  it('Login - Successful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.pasword)
      cy.contains('Logout').should('be.visible')
    })
  })
  it('Login - Successful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.pasword)
      cy.contains('Logout').should('be.visible')
    })
  })
})
