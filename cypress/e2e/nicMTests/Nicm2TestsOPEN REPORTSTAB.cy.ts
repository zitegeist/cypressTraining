describe('Travelink Navigation', () => {
  it('should open the Reports page', () => {
    // Login first
    cy.visit('https://dev-tlcore34.internal.inspiretec.com/Travelink/ui/#/')
    cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')
    cy.get('#txtUserName').type('nichola.matthews')
    cy.get('#txtPassword').type('Comtec123!')
    cy.get('#btnLogin').click()

    // Click Reports
    cy.contains('Reports').click()
  })
})
