describe('Command test - Access URL & login, add to item to basket, view basket & log out.', () => {
  it('Access URL & login, add to basket, view basket & logout.', () => {
    //Access URL
    cy.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'))

    //Add product to basket
    cy.addProductToBasket('5')

    //Logout
    cy.logOut()
  })
})
