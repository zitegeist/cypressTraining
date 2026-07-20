describe('Automation Excercise Home page, register user, login and logout user', () => {
  it('loads and shows navigation', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Home').should('be.visible')
  })
  it('Navigate to the Signup/Login page', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a[href="/login"]').click()
    cy.url().should('include', '/login')
  })
  it('Enters name and email in the signup form', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a[href="/login"]').click()
    cy.url().should('include', '/login')
    cy.contains('New User Signup!').should('be.visible')
  })
})
