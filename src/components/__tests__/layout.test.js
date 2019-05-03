import { useStaticQuery } from 'gatsby'
import serializer from 'jest-emotion'
import React from 'react'
import { render } from 'react-testing-library'
import Layout from '../layout'

expect.addSnapshotSerializer(serializer)

describe('Layout', () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValueOnce({
      site: {
        siteMetadata: {
          desciption:
            'An Open Sourced Platform for Indonesia Election Real Count',
          title: 'Devpendent'
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
})
