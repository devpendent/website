// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for cypress-testing-library extension
/// <reference types="../cypress-testing-library/typings" />

describe('Navigation', () => {
  it('navigates to page-2 properly', () => {
    cy.visit('/')
      .getByText(/page 2/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}page-2/`)
  })

  it('navigates back to home properly', () => {
    cy.visit('/page-2')
      .getByText(/welcome to page 2/i)
      .should('be.visible')

    cy.getByText(/homepage/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}`)
  })
})
