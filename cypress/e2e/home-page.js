import meta from '../../gatsby-config.js'

describe('Simple Devpendant e2e Test', () => {
  it('shows the default home page of devpendant apps', () => {
    cy.visit('/')
      .url()
      .should('eq', `${Cypress.config().baseUrl}`)
  })

  it('shows the Banner of devpendant apps', () => {
    cy.getByText(meta.siteMetadata.title).should('be.visible')
  })

  it('shows the title of devpendant apps', () => {
    cy.title().should('eq', `Home | ${meta.siteMetadata.title}`)
  })
})
