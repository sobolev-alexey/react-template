/// <reference types="cypress" />

describe('Boilerplate site', () => {
  it('should redirect properly', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('button.primary-btn').contains('First page').click()
    cy.location('pathname').should('equal', '/first')
    // cy.location('pathname').should('match', /\/first\//i)

    cy.get('button.primary-btn').contains('Second page').click()
    cy.location('pathname').should('equal', '/second')
    // cy.location('pathname').should('match', /\/second\//i)

    cy.get('button.primary-btn').contains('Home').click()
    cy.location('pathname').should('equal', '/')
  })
})
