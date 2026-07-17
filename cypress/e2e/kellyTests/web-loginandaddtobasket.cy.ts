describe('basket tests', () => {
  it('should login successfully and allow me to add a product to the basket', () => {
    // Launch browser and navigate to website
    cy.visit('/')

    // Verify home page is displayed
    cy.get('body').should('be.visible')

    // Click Signup / Login
    cy.contains('Signup / Login').click()

    // Verify Login page
    cy.contains('Login to your account').should('be.visible')

    // Enter login credentials
    cy.get('[data-qa="login-email"]').type('Kelly_oconnell88@icloud.com')
    cy.get('[data-qa="login-password"]').type('Comtec123!')

    // Click Login
    cy.get('[data-qa="login-button"]').click()

    // Verify successful login
    cy.contains('Logged in as Kelly').should('be.visible')

    //add a product to the basket
    cy.get('[data-product-id="2"]').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.contains('Added!').should('be.visible')
    cy.contains('Continue Shopping').click()
    cy.get('[data-product-id="8"]').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.contains('Added!').should('be.visible')
  })
})
