import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../layout'

describe('Layout', () => {
  const title = 'Devpendent'
  const description =
    'An Open Sourced Platform for Indonesia Election Real Count'

  beforeEach(() => {
    useStaticQuery.mockReturnValueOnce({
      site: {
        siteMetadata: {
          description,
          title
        }
      }
    })
  })

  it('renders correctly', () => {
    const { container } = render(
      <Layout>
        <h1>Devpendent Website</h1>
      </Layout>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows title & description correctly', () => {
    const { getByText } = render(
      <Layout>
        <h1>Devpendent Website</h1>
      </Layout>
    )
    expect(getByText(title)).toBeVisible()
    expect(getByText(description)).toBeVisible()
  })
})
