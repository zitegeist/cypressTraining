describe('Logged in | Basket Tests', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
    })
    //squiggly lines = either BRACKETS, 'quotations' or arguements
    cy.clearBasket()
  })

  it('Logged in | Add multiple items to basket and verify', () => {
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
})

// ids = #
// cy.get('#header')
// class = .
// cy.get('.bg-gray-100')
// literally everything else = [ ]
