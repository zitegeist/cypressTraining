describe('Search Products', () => {

  it('should search for a product successfully', () => {

    // Launch browser and navigate to website
    cy.visit('https://automationexercise.com');

    // Verify home page is visible
    cy.get('body').should('be.visible');
    cy.contains('Home').should('be.visible');

    // Click Products button
    cy.contains('Products').click();

    // Verify user is navigated to All Products page
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    // Enter product name and search
    const productName = 'Blue Top';

    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click();

    // Verify SEARCHED PRODUCTS is displayed
    cy.contains('Searched Products').should('be.visible');

    // Verify at least one matching product is displayed
    cy.get('.productinfo')
      .should('have.length.greaterThan', 0)
      .each(($product) => {
        cy.wrap($product)
          .should('contain.text', productName);
      });

  });

});