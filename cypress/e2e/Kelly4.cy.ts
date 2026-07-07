describe('Arrivals and Departures Report', () => {
    it('should generate the report successfully', () => {
        cy.visit('https://dev-tlcore34.internal.inspiretec.com/Travelink/ui/#/');
        cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only');
        cy.get('#txtUserName').type('kelly-anne.oconnell');
        cy.get('#txtPassword').type('Comtec123!');
        cy.get('#btnLogin').click()
        cy.contains('Reports').click();
        cy.contains('Arrivals and Departures Report').click();
        cy.url().should('include', '/Travelink/ui/#/reports/arrivals-and-departures-report');

        cy.contains('search arrivals and departures').should ('be.visible');
  })
})