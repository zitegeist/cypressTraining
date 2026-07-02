describe('Res Login Tests', () => {
  it('Full Login and verify', () => {
    cy.visit('https://dev-tlcore34.internal.inspiretec.com/travelink/login.aspx')
    cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')
    cy.get('#txtUserName').type("james.o'neill")
    cy.get('#txtPassword').type('Comtec123!')
    cy.get('#btnLogin').click()
    // see login name and logout button
    cy.contains("Logout james.o'neill").should('be.visible')
    // Home Tab
    cy.contains('Home').should('not.be.visible')
    // URL
    cy.url().should('include', '/travelink/ui/#/')
  })
})
