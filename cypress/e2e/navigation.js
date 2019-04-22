describe('Simple Devpendant e2e Test', () => {
  it('navigates to page-2 proprly', () => {
    cy.getByText(/page 2/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}page-2/`)
  })

  it('navigates back to home properly', () => {
    cy.getByText(/homepage/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}`)
  })
})
