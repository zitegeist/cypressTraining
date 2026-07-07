describe('Automation Exercise Login Tests', () => {
  describe('Valid login tests', () => {
    beforeEach(() => {
      //Navigate to Login Page before each test
      cy.visit('/login')
      //Verify URL contains /login
      cy.url().should('include', '/login')
      //Enter valid email and password and click login button
      cy.get('[data-qa="login-email"]').type('chris.wall@inspiretec.com')
      cy.get('[data-qa="login-password"]').type('Comtec123!')
      cy.get('[data-qa="login-button"]').click()
    })

    it('Login succesfully', () => {
      //Verify Redirected to home page on login
      cy.url().should('include', '/')
      //Verify 'logged in as.....' text is visible
      cy.contains('Logged in as Chris Wall').should('be.visible')
      //Verify logout button is visible
      cy.contains('Logout').should('be.visible')
    })

    it('Logout succesfully', () => {
      //Click logout button
      cy.get('a[href="/logout"]').click()
      //Verify Redirected to home page on login
      cy.url().should('include', '/login')
      //Verify Signup/Login button is visible
      cy.contains('Signup / Login').should('be.visible')
    })
  })

  it('Invalid login test', () => {
    //Navigate to Login Page before each test
    cy.visit('/login')
    //Verify URL contains /login
    cy.url().should('include', '/login')
    //Enter invalid email and password and click login button
    cy.get('[data-qa="login-email"]').type('invalid@email.com')
    cy.get('[data-qa="login-password"]').type('invalidpassword')
    cy.get('[data-qa="login-button"]').click()
    //Verify error message is visible
    cy.contains('Your email or password is incorrect!').should('be.visible')
    //Verify Signup/Login button is visible
    cy.contains('Signup / Login').should('be.visible')
  })
})

