describe('Basket Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Add one item to basket and verify', () => {
    cy.addToBasket('1')
    cy.get('#cartModal').contains('View Cart').click()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    cy.get('#cart_info_table').should('have.length', 1)
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_quantity').contains('1').should('be.visible')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('.cart_total .cart_total_price').should('contain.text', 'Rs.')
  })

  it('Add multiple items to basket and verify', () => {
    cy.addToBasket('2')
    cy.contains('Continue Shopping').click()
    cy.addToBasket('8')
    cy.get('#cartModal').contains('View Cart').click()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    cy.get('#cart_info_table tbody tr').should('have.length', 2)
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('.cart_total .cart_total_price').should('contain.text', 'Rs.')
  })

  it('Remove from basket', () => {
    cy.addToBasket('2')
    cy.contains('Continue Shopping').click()
    cy.addToBasket('8')
    cy.get('#cartModal').contains('View Cart').click()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    cy.get('.cart_quantity').contains('2').should('be.visible')
    cy.get('#cart_info_table tbody tr').should('have.length', 2)
    cy.get('.cart_quantity_delete').first().click()
    cy.get('#cart_info_table tbody tr').should('have.length', 1)
    cy.get('.cart_quantity').contains('1').should('be.visible')
  })
})

// ids = #
// cy.get('#header')
// class = .
// cy.get('.bg-gray-100')
// literally everything else = [ ]
