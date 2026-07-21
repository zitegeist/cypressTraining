describe('Checkout', () => {
  it('loads and shows the navigation', () => {
    //Access URL
    cy.visit('/')
    cy.get('a[href="/login"]').should('be.visible')
    cy.get('a[href="/products"]').should('be.visible')
    cy.get('a[href="/login"]').click()
    cy.contains('New User Signup!').should('be.visible')

    //Begin sign up journey
    cy.get('[data-qa="login-email"]').type('callum.test@live.com')
    cy.get('[data-qa="login-password"]').type('Password123')
    cy.get('[data-qa="login-button"]').click()
    cy.get('a[href="/logout"]').should('be.visible')

    //Add items to basket
    cy.get('[data-product-id="2"]').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.get('#cartModal').contains('View Cart').click()
    cy.contains('Shopping Cart').should('be.visible')
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('#cart_info_table tbody tr').should('have.length', 1)
  })
})
