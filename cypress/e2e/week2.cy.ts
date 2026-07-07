describe('Weekly Test2 - Login', () => {
  it('Login', () => {
    cy.visit('https://dev-tlcore34.internal.inspiretec.com/travelink/login.aspx')
    cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')
    cy.get('#txtUserName').type('nicola.thomas')
    cy.get('#txtPassword').type('Comtec123!')
    cy.get('#btnLogin').click()
  })
})
