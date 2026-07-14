describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  });

  it('LOGIN', function() {
    describe('Res Login Tests', () => {
      it('Full Login and verify', () => {
        cy.visit('https://dev-tlcore34.internal.inspiretec.com/travelink/login.aspx')
        cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')
        cy.get('#txtUserName').type("nichola.matthews")
        cy.get('#txtPassword').type('Comtec123!')
        cy.get('#btnLogin').click()
        cy.url().should('include', '/home')
  })
})