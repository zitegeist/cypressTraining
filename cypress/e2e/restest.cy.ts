import { TIMEOUT } from "dns"

describe('Res test', () => {
  it('Res test - create quote', () => {
  cy.on('uncaught:exception', () => {
    return false // tells Cypress not to fail the test
  })
    //log in
    cy.visit('https://dev-tlcore34.internal.inspiretec.com/travelink/login.aspx')
    cy.get('#ddlDatabase').select('Q244_MLQA_CAMC_11Feb26_Automation_Only')
    cy.get('#txtUserName').type("callum.page")
    cy.get('#txtPassword').type('Comtec123!')
    cy.get('#btnLogin').click()
    cy.contains("Logout callum.page").should('be.visible')
    cy.contains('Home').should('be.visible')
    cy.url().should('include', '/travelink/ui/#/')

    //Create new quote
    cy.contains('a', 'Create new').click()
    cy.contains('a', 'Create new quote').click()
    cy.contains('New Quote', { timeout: 5000 }).should('be.visible')
    cy.get('a[href*="prod=CAMC UK Product"]').click()
  })
})