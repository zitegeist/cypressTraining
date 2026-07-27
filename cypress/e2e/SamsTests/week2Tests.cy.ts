describe('Search Products', () => {
  it('Searches for a Product', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Home').should('be.visible')
    cy.contains('Products').click()
    cy.url().should('include', '/products')
    cy.get('#search_product').type('top')
    cy.get('#submit_search').click()
    cy.contains('Searched Products').should('be.visible')
    cy.contains('Winter Top').should('be.visible')
  })


})



describe('Login User with Valid password', () => {
  it('Full login and verify', () => {
    cy.visit('http://automationexercise.com')
    cy.contains('Home').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type("samantha.samiada@inspiretec.com")
    cy.get('[data-qa="login-password"]').type('Mississippi94!')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as samantha').should('be.visible')
  })

})

describe('Login User with Invalid password', () => {
  it('Unable to login and verify', () => {
    cy.visit('http://automationexercise.com')
    cy.contains('Home').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type("samantha.samiada@inspiretec.com")
    cy.get('[data-qa="login-password"]').type('Mississippi94')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })


})



