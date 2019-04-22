import meta from '../../gatsby-config.js'

describe('Simple Devpendant e2e Test', () => {
  it('shows the default home page of devpendant apps', () => {
    cy.visit('/')
      .url()
      .should('eq', `${Cypress.config().baseUrl}`)
  })

  it('shows the Banner of devpendant apps', () => {
    cy.contains(meta.siteMetadata.title).should('be.visible')
    cy.get('h1').should('contain', meta.siteMetadata.title)
  })

  it('shows the title of devpendant apps', () => {
    cy.title().should('contain', meta.siteMetadata.title)
  })
})
