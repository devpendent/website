import { StaticQuery } from 'gatsby'
import React from 'react'
import { render } from 'react-testing-library'
import Layout from '../layout'

describe('Image', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            desciption:
              'An Open Sourced Platform for Indonesia Election Real Count',
            title: 'Devpendent'
          }
        }
      }))
  })

  it('renders correctly', () => {
    const { container } = render(
      <Layout>
        <h1>Devpendent Website</h1>
      </Layout>
    )
    expect(container).toMatchSnapshot()
  })
})
