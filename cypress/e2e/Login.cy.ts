describe('login Tests', () => {
  it('login - Successful, valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
      cy.contains('Logout').should('be.visible')
    })
  })
  it('login - Successful, valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
      cy.contains('Logout').should('be.visible')
    })
  })
})
