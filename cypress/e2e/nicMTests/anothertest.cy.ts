describe('Booking Sales Report', () => {
  it('should open the Booking Sales Report', () => {
    cy.visit('https://dev-tlcore34.internal.inspiretec.com/Travelink/ui/#/')

    cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')
    cy.get('#txtUserName').type('nichola.matthews')
    cy.get('#txtPassword').type('Comtec123!')
    cy.get('#btnLogin').click()

    // Wait until the Reports menu is visible
    cy.contains('Reports').should('be.visible').click()

    cy.contains('Booking Sales Report').click()

    cy.url().should('include', 'BookingSales')

    // Confirm the page title is displayed
    cy.contains('Booking Sales Report').should('be.visible')
  })
})
