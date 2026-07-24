describe('Valid login tests', () => {
  beforeEach(() => {
    cy.visitLoginPage()
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
    })
  })
  it('Enter valid login details | verify login successful', () => {
    //Verify Redirected to home page on login
    cy.url().should('include', '/')
    //Verify 'logged in as.....' text is visible
    cy.contains('Logged in as Chris Wall').should('be.visible')
    //Verify logout button is visible
    cy.contains('Logout').should('be.visible')
  })

  it('Select logout | verify logout successful', () => {
    //Click logout button
    cy.get('a[href="/logout"]').click()
    //Verify Redirected to home page on login
    cy.url().should('include', '/login')
    //Verify Signup/Login button is visible
    cy.contains('Signup / Login').should('be.visible')
  })
})

describe('Invalid login tests', () => {
  it('Enter invalid login details | verify not logged in & error message shown', () => {
    cy.visitLoginPage()
    cy.fixture('users').then((users) => {
      cy.login(users.invalidUser.email, users.invalidUser.password)
    })
    cy.contains('Your email or password is incorrect!').should('be.visible')
    //Verify Signup/Login button is visible
    cy.contains('Signup / Login').should('be.visible')
  })
})
