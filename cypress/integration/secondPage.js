/// <reference types="cypress" />

describe('Boilerplate site', () => {
  it('check content on the second page', () => {
    cy.visit('/second')
    cy.wait(1000)
    cy.get('img').should('be.visible')
  })
})
