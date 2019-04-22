describe('Simple Devpendant e2e Test', () => {
  it('navigates to page-2 proprly', () => {
    cy.visit('/')
      .get('main > a')
      .should('contain', 'page 2')
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}page-2/`)
  })

  it('navigates back to home properly', () => {
    cy.get('main > a')
      .should('contain', 'homepage')
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}`)
  })
})
