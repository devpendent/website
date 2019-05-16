// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for cypress-testing-library extension
/// <reference types="../cypress-testing-library/typings" />

describe('Submit Page', () => {
  beforeEach(() => {
    cy.visit('/submit')
  })

  it('validates required fields correctly', () => {
    cy.getByLabelText('Calon A').type('abc')
    cy.getByLabelText('Calon B').type('def')
    cy.getByText('Kirim').click({ force: true })

    cy.getExplainByLabelText('Calon A').should(
      'have.text',
      'Masukkan total perolehan suara Calon A'
    )
    cy.getExplainByLabelText('Calon B').should(
      'have.text',
      'Masukkan total perolehan suara Calon B'
    )
  })

  it('validates maximum digits correctly', () => {
    cy.getByLabelText('Calon A').type('1234')
    cy.getExplainByLabelText('Calon A').should(
      'have.text',
      'Total suara tidak boleh melebihi 3 digit angka'
    )

    cy.getByLabelText('Calon B').type('5678')
    cy.getExplainByLabelText('Calon B').should(
      'have.text',
      'Total suara tidak boleh melebihi 3 digit angka'
    )
  })

  it('submit the forms correctly', () => {
    cy.getByLabelText('Calon A').type('123')
    cy.getByLabelText('Calon B').type('456')

    cy.getByLabelText('Calon A').should('have.value', '123')
    cy.getByLabelText('Calon B').should('have.value', '456')

    cy.getByText('Kirim').click({ force: true })

    cy.getExplainByLabelText('Calon A').should(
      'not.have.text',
      'Masukkan total perolehan suara Calon A'
    )
    cy.getExplainByLabelText('Calon B').should(
      'not.have.text',
      'Masukkan total perolehan suara Calon B'
    )
  })
})
