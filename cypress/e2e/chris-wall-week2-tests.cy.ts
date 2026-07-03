describe('Automation Login Tests', () => {
  it('Navigate to Login Page and succesfully login', () => {
    cy.visit ('/login') 
    cy.url().should('include', '/login')
    cy.get('[data-qa="login-email"]').type('chris.wall@inspiretec.com')
    cy.get('[data-qa="login-password"]').type('Comtec123!')
    cy.get('[data-qa="login-button"]').click()
    //Verify Redirected to home page on login
    cy.url().should('include', '/')
    //Verify 'logged in as.....' text is visible
    cy.contains('Logged in as Chris Wall').should('be.visible')
    //Verify logout button is visible
    cy.contains('Logout').should('be.visible')
  })

   //it('Logout and verify', () => {
    //cy.get( 'a[href="/logout"]').click()
    //Verify Redirected to home page on login
    //cy.url().should('include', '/login')
    //Verify Signup/Login button is visible
    //cy.contains('a[href="/login"]').should('be.visible')
  //})

  it('Failed login and verify', () => {
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type('invalid@email.com')
    cy.get('[data-qa="login-password"]').type('invalidpassword')
    cy.get('[data-qa="login-button"]').click()
    //Verify error message is visible
    cy.contains('Your email or password is incorrect!').should('be.visible')
    //Verify Signup/Login button is visible
    cy.contains('Signup / Login').should('be.visible')
  })
})

