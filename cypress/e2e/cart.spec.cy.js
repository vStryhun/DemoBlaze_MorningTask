/// <reference types="cypress" />


describe('Add product to cart Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to add Samsung Galaxy s6 to the cart', () => {
    cy.contains('a','Samsung galaxy s6').click()

    cy.get('a[onclick="addToCart(1)"]').click()

    cy.contains('Product added').should('exist')
  });
});
