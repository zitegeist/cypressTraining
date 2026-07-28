describe('Login Tests', () => {
  it('Login - Successful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
      cy.contains('Logout').should('be.visible')
    })
  })
  it('Login - Unsuccessful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.invalidUser.email, users.invalidUser.password)
      cy.contains('Your email or password is incorrect!').should('be.visible')
      cy.contains('Signup / Login').should('be.visible')
      cy.contains('Logout').should('not.exist')
    })
  })
})
