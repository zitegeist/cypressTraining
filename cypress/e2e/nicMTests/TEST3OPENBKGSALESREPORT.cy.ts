describe('Booking Sales Report', () => {
  it('should open the Booking Sales Report', () => {
    // Login
    cy.visit('https://dev-tlcore34.internal.inspiretec.com/Travelink/ui/#/')
    cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')
    cy.get('#txtUserName').type('nichola.matthews')
    cy.get('#txtPassword').type('Comtec123!')
    cy.get('#btnLogin').click()

    // Open Reports
    cy.contains('Reports').click()

    // Open Booking Sales Report
    cy.contains('Booking Sales Report').click()

    // Verify the report page has opened
    cy.contains('Booking Sales Report').should('be.visible')
  })
})
