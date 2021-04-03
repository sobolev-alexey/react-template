/// <reference types="cypress" />
describe('smoke tests', () => {
    it('basic functionality', () => {
        cy.visit('/')
        cy.wait(1000)
        cy.contains('h2', 'Home page').should('be.visible')
        cy.get('button.primary-btn').contains('First page').click()
        cy.location('pathname').should('equal', '/first')
        cy.contains('h2', 'First page')
        cy.get('.data').contains('gender')
    
        cy.get('button.primary-btn').contains('Second page').click()
        cy.location('pathname').should('equal', '/second')
        cy.get('img').should('be.visible')
    
        cy.get('button.primary-btn').contains('Home').click()
        cy.location('pathname').should('equal', '/')
    })
})