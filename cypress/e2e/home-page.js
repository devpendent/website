// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for @testing-library/cypress extension
/// <reference types="../@testing-library/cypress/typings" />

import meta from '../../gatsby-config.js'

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the default home page of devpendant apps', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}`)
  })

  it('shows the Banner of devpendant apps', () => {
    cy.findByText(meta.siteMetadata.title).should('be.visible')
  })

  it('shows the title of devpendant apps', () => {
    cy.title().should('eq', `Home | ${meta.siteMetadata.title}`)
  })
})
