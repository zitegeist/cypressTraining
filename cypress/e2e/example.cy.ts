describe('Home page', () => {
  it('loads and shows the navigation', () => {
    cy.visit('/')
    cy.get('a[href="/login"]').should('be.visible')
    cy.get('a[href="/products"]').should('be.visible')
  })

  it('shows the website header text', () => {
    cy.visit('/')
    cy.contains('Products').should('be.visible')
  })

  it('lists featured items on the home page', () => {
    cy.visit('/')
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 2)
  })

  it('navigates to the Products page when the nav link is clicked', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.url().should('include', '/products')
    cy.contains('All Products').should('be.visible')
  })
})
