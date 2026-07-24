describe('Logged in | Basket Tests', () => {
  beforeEach(() => {
    cy.visitLoginPage()
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password)
    })
    cy.clearBasket()
  })
  it('Logged in | Add one item to basket and verify', () => {
    cy.addSingleItemToBasket()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    cy.get('#cart_info_table').should('have.length', 1)
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_quantity').contains('1').should('be.visible')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('.cart_total .cart_total_price').should('contain.text', 'Rs.')
  })

  it('Logged in | Add multiple items to basket and verify', () => {
    cy.addTwoItemsToBasket()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    cy.get('#cart_info_table tbody tr').should('have.length', 2)
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('.cart_total .cart_total_price').should('contain.text', 'Rs.')
  })

  it('Logged in | Add two items to basket then remove one verify one item remains in basket', () => {
    cy.addTwoItemsToBasket()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    cy.get('#cart_info_table tbody tr').should('have.length', 2)
    cy.get('#cart_info_table tbody tr').first().find('.cart_quantity_delete').click()
    cy.get('#cart_info_table tbody tr').should('have.length', 1)
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('.cart_total .cart_total_price').should('contain.text', 'Rs.')
  })
})

describe('Logged out | Basket Tests', () => {
  beforeEach(() => {
    cy.visitHomePage()
    cy.clearBasket()
  })
  it('Logged out | Add one item to basket and verify', () => {
    cy.addSingleItemToBasket()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    cy.get('#cart_info_table').should('have.length', 1)
    cy.get('.cart_description').should('not.be.empty')
    cy.get('.cart_quantity').contains('1').should('be.visible')
    cy.get('.cart_price').should('contain.text', 'Rs.')
    cy.get('.cart_total .cart_total_price').should('contain.text', 'Rs.')
  })

  it('Logged out | Add multiple items to basket and verify', () => {
    cy.addTwoItemsToBasket()
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
