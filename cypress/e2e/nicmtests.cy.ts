describe('Travelink Login', () => {
  it('should log in successfully', () => {
    // Open the Travelink application
    cy.visit('https://dev-tlcore34.internal.inspiretec.com/Travelink/ui/#/')
    cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')

    cy.get('#txtUserName').type('nichola.matthews')

    // Enter password
    cy.get('#txtPassword').type('Comtec123!')

    // Click the Login button
    cy.get('#btnLogin').click()
  })
})
