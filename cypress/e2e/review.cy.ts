describe('Review a product', () => {
  it('loads and shows the navigation', () => {
    //Access URL
    cy.visit('/')
    cy.get('a[href="/login"]').should('be.visible')
    cy.get('a[href="/products"]').should('be.visible')

    //Select products
    cy.get('a[href="/products"]').click()
    cy.contains('All Products', { timeout: 2000 }).should('be.visible')
    cy.get('a[href="/product_details/1"]').click()
    cy.contains('Write Your Review', { timeout: 2000 }).should('be.visible')

    //Enter review
    cy.get('#name').type('Callum')
    cy.get('#email').type('callum.test@live.com')
    cy.get('#review').type('Top arrived but it was red!')
    cy.get('[id="button-review"]').click()
    cy.contains('Thank you for your review', { timeout: 2000}).should('be.visible')


  })

})