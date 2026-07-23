describe('Basket Tests', () => {
  it('login and add to basket', () => {
    cy.simpleLogin()
    cy.contains('Logout').should('be.visible')
    cy.get('.add-to-cart').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.contains('Added!').should('be.visible')
  })

  it('login and add multiple products to basket', () => {
    cy.simpleLogin()
    cy.get('[data-product-id="2"]').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.contains('Added!').should('be.visible')
    cy.contains('Continue Shopping').click()
    cy.get('[data-product-id="8"]').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.contains('Added!').should('be.visible')
  })
})

// ids = #
// cy.get('#header')
// class = .
// cy.get('.bg-gray-100')
// literally everything else = [ ]
