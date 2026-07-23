describe('Login Tests', () => {
  it('Login - successful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
      cy.contains('Logout').should('be.visible')
    })
  })
  it('Login - successful', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
      cy.contains('Logout').should('be.visible')
    })
  })
})

//describe = group of tests, it = a single test, beforeEach = runs before each test in the describe block, cy.fixture = loads a fixed set of data located in the fixtures folder, cy.login = custom command to log in a user, cy.contains = checks if an element contains specific text, should = assertion to check if an element meets certain conditions
