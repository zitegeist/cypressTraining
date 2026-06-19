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
})
