describe('Login, add to basket, access basket & remove 1 item', () => {
  it('Login, add items to basket, access basket, remove 1 item, remove final item.', () => {
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
    cy.contains('Added!').should('be.visible')
    cy.contains('Continue Shopping').click()
    cy.get('[data-product-id="5"]').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.contains('Added!').should('be.visible')
    cy.get('#cartModal').contains('View Cart').click()
    cy.contains('Shopping Cart').should('be.visible')
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('#cart_info_table tbody tr').should('have.length', 2)

    //Remove one item from basket
    cy.get('[data-product-id="2"]').first().click()
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('#cart_info_table tbody tr').should('have.length', 1)

    //Remove remaining item from basket
    cy.get('[data-product-id="5"]').first().click()
    cy.contains('Cart is empty!').should('be.visible')
    cy.get('#cart_info_table tbody tr').should('have.length', 0)
  })
})

describe('Add to basket logged out.', () => {
  it('Add item to basket when logged out.', () => {
    //Access URL
    cy.visit('/')

    //Ensure user is logged out
    cy.get('a[href="/login"]').should('be.visible')

    //Add item to basket
    cy.get('[data-product-id="5"]').first().click()
    cy.get('#cartModal').should('be.visible')
    cy.contains('Added!').should('be.visible')

    //Access cart
    cy.get('#cartModal').contains('View Cart').click()
    cy.get('#cart_info_table').should('be.visible')
    cy.get('#cart_info_table').should('have.length', 1)
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_quantity').contains('1').should('be.visible')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('.cart_total .cart_total_price').should('contain.text', 'Rs.')
  })
})
