describe('add to basket exercises', () => {
  it('add 1 product to basket', () => {
    cy.visit('/')
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="login-email"]').type('nicola.thomas@inspiretec.com')
    cy.get('[data-qa="login-password"]').type('Comtec123!')
    cy.get('[data-qa="login-button"]').click()
  })
})
