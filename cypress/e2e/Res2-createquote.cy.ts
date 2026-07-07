describe('Create Quote', () => {
    it('create a new quote successfully', () => {
        cy.visit('https://dev-tlcore34.internal.inspiretec.com/Travelink/ui/#/');
        cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only');
        cy.get('#txtUserName').type('kelly-anne.oconnell');
        cy.get('#txtPassword').type('Comtec123!');
        cy.get('#btnLogin').click();
        cy.contains('Create new').click();
        cy.contains('Create new quote').click();
        cy.url().should('include', '/Travelink/ui/#/default/new-quote');
        cy.contains('CAMC UK').click();
        cy.contains('Optional Fields').should('be.visible');
    });
});