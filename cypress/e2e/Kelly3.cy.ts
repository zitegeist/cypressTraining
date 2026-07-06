describe('Login and Logout', () => {

  const user = {
    email: 'qatester@example.com',      // Replace with a valid registered email
    password: 'Password123!',
    username: 'QA Tester'               // Replace with the registered username
  };

  it('should login successfully and logout', () => {

    // Launch browser and navigate to website
    cy.visit('https://automationexercise.com');

    // Verify home page is displayed
    cy.get('body').should('be.visible');

    // Click Signup / Login
    cy.contains('Signup / Login').click();

    // Verify Login page
    cy.contains('Login to your account').should('be.visible');

    // Enter login credentials
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);

    // Click Login
    cy.get('[data-qa="login-button"]').click();

    // Verify successful login
    cy.contains(`Logged in as ${user.username}`).should('be.visible');

    // Click Logout
    cy.contains('Logout').click();

    // Verify user is returned to login page
    cy.url().should('include', '/login');
    cy.contains('Login to your account').should('be.visible');

  });

});