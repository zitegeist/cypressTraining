describe('Register new user', () => {
  it('loads and shows the navigation', () => {
    //Access URL
    cy.visit('/')
    cy.get('a[href="/login"]').should('be.visible')
    cy.get('a[href="/products"]').should('be.visible')
    cy.get('a[href="/login"]').click()
    cy.contains('New User Signup!').should('be.visible')

    //Begin sign up journey
    cy.get('[data-qa="signup-name"]').type('Callum Test')
    cy.get('[data-qa="signup-email"]').type('callum.test@live.com')
    cy.get('[data-qa="signup-button"]').click()

    //Complete fields
    cy.contains('Enter Account Information', { timeout: 2000 }).should('be.visible')
    cy.get('#id_gender1').click()
    cy.get('#password.form-control').type('Password123')
    cy.get('#days.form-control').select('1')
    cy.get('#months.form-control').select('January')
    cy.get('#years.form-control').select('2000')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#first_name.form-control').type('Callum')
    cy.get('#last_name.form-control').type('Page')
    cy.get('#address1.form-control').type('122 Road')
    cy.get('#country.form-control').select('New Zealand')
    cy.get('#state.form-control').type('North')
    cy.get('#city.form-control').type('Auckland')
    cy.get('#zipcode.form-control').type('NZ1 1NZ')
    cy.get('#mobile_number.form-control').type('07777727777')
    cy.get('[data-qa="create-account"]').click()

    //Account created
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as Callum Test').should('be.visible')

    //Delete account
    cy.get('a[href="/delete_account"]').should('be.visible')
    cy.get('a[href="/delete_account"]').click()
    cy.contains('Account Deleted!', { timeout: 2000 }).should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})
