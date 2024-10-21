/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign In Flow', () => {
  let user;
  beforeEach(() => {
    user = generateUser();
    cy.visit('/');
    cy.registerNewUser(user.username, user.password); 
  });

  it('should provide an ability to log in', () => {
    cy.get('#login2').click()

    cy.get('#loginusername')
      .type(user.username);

    cy.get('#loginpassword')
      .type(user.password);

    cy.get('button[onclick="logIn()"]').click();

    cy.get('#nameofuser').should('contain', `Welcome${user.username}`)
  });
});
