describe('Place Order Scenarios', () => {

  const user = {
    name: 'Kelly',
    email: `kelly_oconnell88@icloud.com`,
    password: 'Comtec123!',
    firstName: 'Kelly',
    lastName: 'O\'Connell',
    address: '123 Test Street',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: 'M1M1M1',
    mobile: '07123456789'
  };

  const payment = {
    nameOnCard: 'QA Tester',
    cardNumber: '4111111111111111',
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2030'
  };

  function addProductToCart() {
    cy.contains('Products').click();
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();
    cy.contains('Continue Shopping').click();
  }

  function completeSignup() {
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.contains('Signup').click();

    cy.get('#id_gender1').check();
    cy.get('#password').type(user.password);

    cy.get('#days').select('1');
    cy.get('#months').select('January');
    cy.get('#years').select('1995');

    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#address1').type(user.address);
    cy.get('#country').select(user.country);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zipcode);
    cy.get('#mobile_number').type(user.mobile);

    cy.contains('Create Account').click();

    cy.contains('ACCOUNT CREATED!').should('be.visible');
    cy.contains('Continue').click();

    cy.contains(`Logged in as ${user.name}`).should('be.visible');
  }

  function completePayment() {
    cy.get('textarea[name="message"]').type('Automated Cypress order.');

    cy.contains('Place Order').click();

    cy.get('[data-qa="name-on-card"]').type(payment.nameOnCard);
    cy.get('[data-qa="card-number"]').type(payment.cardNumber);
    cy.get('[data-qa="cvc"]').type(payment.cvc);
    cy.get('[data-qa="expiry-month"]').type(payment.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(payment.expiryYear);

    cy.contains('Pay and Confirm Order').click();

    cy.contains('Your order has been placed successfully!')
      .should('be.visible');
  }

  function deleteAccount() {
    cy.contains('Delete Account').click();
    cy.contains('ACCOUNT DELETED!').should('be.visible');
    cy.contains('Continue').click();
  }

  it('Test Case 14 - Place Order: Register during Checkout', () => {

    cy.visit('https://automationexercise.com');

    cy.get('body').should('be.visible');

    addProductToCart();

    cy.contains('Cart').click();

    cy.url().should('include', '/view_cart');

    cy.contains('Proceed To Checkout').click();

    cy.contains('Register / Login').click();

    completeSignup();

    cy.contains('Cart').click();

    cy.contains('Proceed To Checkout').click();

    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    completePayment();

    deleteAccount();

  });

  it('Test Case 15 - Place Order: Register before Checkout', () => {

    // Create another unique email
    user.email = `qatester${Date.now()}@example.com`;

    cy.visit('https://automationexercise.com');

    cy.get('body').should('be.visible');

    cy.contains('Signup / Login').click();

    completeSignup();

    addProductToCart();

    cy.contains('Cart').click();

    cy.url().should('include', '/view_cart');

    cy.contains('Proceed To Checkout').click();

    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    completePayment();

    deleteAccount();

  });

});