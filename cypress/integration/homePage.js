/// <reference types="cypress" />

describe('Boilerplate site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.contains('h2', 'Home page').should('be.visible')
  })
})
