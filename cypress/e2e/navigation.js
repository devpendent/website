// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for @testing-library/cypress extension
/// <reference types="../@testing-library/cypress/typings" />

describe('Navigation', () => {
  it('navigates to page-2 properly', () => {
    cy.visit('/')
      .findByText(/page 2/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}page-2/`)
  })

  it('navigates back to home properly', () => {
    cy.visit('/page-2')
      .findByText(/welcome to page 2/i)
      .should('be.visible')

    cy.findByText(/homepage/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}`)
  })
})
