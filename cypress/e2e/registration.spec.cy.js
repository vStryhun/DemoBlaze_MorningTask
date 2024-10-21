/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up Flow', () => {
  before(() => {
    cy.visit('/');
  });
  it('should provide an ability to register a new user', () => {
    const { username, password } = generateUser();
    cy.registerNewUser(username, password); 

    cy.get('#nameofuser').should('contain', `Welcome${username}`)
  });
});