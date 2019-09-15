// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for @testing-library/cypress extension
/// <reference types="../@testing-library/cypress/typings" />

describe('Submit Page', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', 'http://localhost:8000/page-data/submit/page-data.json').as(
      'pageData'
    )
    cy.visit('/submit').wait('@pageData')
  })

  it('validates required fields correctly', () => {
    cy.findByLabelText('Calon A').type('abc')
    cy.findByLabelText('Calon B').type('def')
    cy.findByLabelText('Tidak Sah').type('ghi')
    cy.findByLabelText('Sah').type('jkl')
    cy.findByLabelText('Sah + Tidak Sah').type('mno')
    cy.findByText('Kirim').click({ force: true })

    cy.getFormItemByLabelText('Calon A').should('have.class', 'has-error')
    cy.getExplainByLabelText('Calon A').should(
      'have.text',
      'Masukkan total perolehan suara Calon A'
    )
    cy.getFormItemByLabelText('Calon B').should('have.class', 'has-error')
    cy.getExplainByLabelText('Calon B').should(
      'have.text',
      'Masukkan total perolehan suara Calon B'
    )
    cy.getFormItemByLabelText('Tidak Sah').should('have.class', 'has-error')
    cy.getExplainByLabelText('Tidak Sah').should(
      'have.text',
      'Masukkan jumlah suara tidak sah'
    )
    cy.getFormItemByLabelText('Sah').should('have.class', 'has-error')
    cy.getExplainByLabelText('Sah').should(
      'have.text',
      'Masukkan jumlah seluruh suara sah (A + B)'
    )
    cy.getFormItemByLabelText('Sah + Tidak Sah').should(
      'have.class',
      'has-error'
    )
    cy.getExplainByLabelText('Sah + Tidak Sah').should(
      'have.text',
      'Masukkan jumlah seluruh suara sah dan suara tidak sah'
    )
  })

  it('validates maximum digits correctly', () => {
    cy.findByLabelText('Calon A').type('1234')
    cy.getFormItemByLabelText('Calon A').should('have.class', 'has-error')
    cy.getExplainByLabelText('Calon A').should(
      'have.text',
      'Total suara tidak boleh melebihi 3 digit angka'
    )

    cy.findByLabelText('Calon B').type('5678')
    cy.getFormItemByLabelText('Calon B').should('have.class', 'has-error')
    cy.getExplainByLabelText('Calon B').should(
      'have.text',
      'Total suara tidak boleh melebihi 3 digit angka'
    )
  })

  it('validates incorrect suara sah calculation correctly', () => {
    cy.findByLabelText('Calon A').type('123')
    cy.findByLabelText('Calon B').type('456')
    cy.findByLabelText('Sah').type('578')

    cy.getFormItemByLabelText('Sah').should('have.class', 'has-warning')
    cy.getExplainByLabelText('Sah').should(
      'have.text',
      'Perhitungan suara sah salah'
    )

    cy.findByLabelText('Sah').type('{backspace}9')
    cy.getExplainByLabelText('Sah').should(
      'not.have.text',
      'Perhitungan suara sah salah'
    )
  })

  it('validates incorrect total calculation correctly', () => {
    cy.findByLabelText('Calon A').type('123')
    cy.findByLabelText('Calon B').type('456')
    cy.findByLabelText('Tidak Sah').type('21')
    cy.findByLabelText('Sah').type('579')
    cy.findByLabelText('Sah + Tidak Sah').type('601')

    cy.getFormItemByLabelText('Sah + Tidak Sah').should(
      'have.class',
      'has-warning'
    )
    cy.getExplainByLabelText('Sah + Tidak Sah').should(
      'have.text',
      'Perhitungan jumlah seluruh suara sah dan suara tidak sah salah'
    )

    cy.findByLabelText('Sah + Tidak Sah').type('{backspace}0')
    cy.getExplainByLabelText('Sah + Tidak Sah').should(
      'not.have.text',
      'Perhitungan jumlah seluruh suara sah dan suara tidak sah salah'
    )
  })

  it('submit the forms correctly', () => {
    cy.findByLabelText('Calon A').type('123')
    cy.findByLabelText('Calon B').type('456')
    cy.findByLabelText('Tidak Sah').type('21')
    cy.findByLabelText('Sah').type('579')
    cy.findByLabelText('Sah + Tidak Sah').type('600')

    cy.findByLabelText('Calon A').should('have.value', '123')
    cy.findByLabelText('Calon B').should('have.value', '456')
    cy.findByLabelText('Tidak Sah').should('have.value', '21')
    cy.findByLabelText('Sah').should('have.value', '579')
    cy.findByLabelText('Sah + Tidak Sah').should('have.value', '600')

    cy.findByText('Kirim').click({ force: true })

    cy.getExplainByLabelText('Calon A').should(
      'not.have.text',
      'Masukkan total perolehan suara Calon A'
    )
    cy.getExplainByLabelText('Calon B').should(
      'not.have.text',
      'Masukkan total perolehan suara Calon B'
    )
    cy.getExplainByLabelText('Tidak Sah').should(
      'not.have.text',
      'Masukkan jumlah suara tidak sah'
    )
    cy.getExplainByLabelText('Sah').should(
      'not.have.text',
      'Masukkan jumlah seluruh suara sah (A + B)'
    )
    cy.getExplainByLabelText('Sah + Tidak Sah').should(
      'not.have.text',
      'Masukkan jumlah seluruh suara sah dan suara tidak sah'
    )
  })
})
