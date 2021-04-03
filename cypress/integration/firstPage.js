/// <reference types="cypress" />

describe('Boilerplate site', () => {
  it('check content on the first page', () => {
    cy.visit('/first')
    cy.wait(1000)
    cy.contains('h2', 'First page')
    cy.get('.data').contains('gender')
  })
})
