import { useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { render } from 'react-testing-library'
import SEO from '../seo'

describe('SEO', () => {
  const description = `An Open Sourced Platform for Indonesian Election Real Count`
  beforeEach(() => {
    useStaticQuery.mockReturnValueOnce({
      site: {
        siteMetadata: {
          author: `Devpendent Team`,
          description,
          title: `Devpendent`
        }
      }
    })
  })

  it('renders correctly', () => {
    render(<SEO title='Home' />)
    const {
      htmlAttributes: { lang },
      metaTags,
      title
    } = Helmet.peek()
    expect(lang).toEqual('en')
    expect(title).toEqual('Home | Devpendent')
    expect(metaTags.find(tag => tag.name === 'description').content).toEqual(
      description
    )
    expect(metaTags.find(tag => tag.property === 'og:title').content).toEqual(
      'Home'
    )
    expect(
      metaTags.find(tag => tag.property === 'og:description').content
    ).toEqual(description)
  })

  it('handle values overriding correctly', () => {
    const newDescription = 'New description'
    const keywords = ['Indonesia', 'election', 'real count']

    render(
      <SEO description={newDescription} keywords={keywords} title='Home' />
    )
    const {
      htmlAttributes: { lang },
      metaTags,
      title
    } = Helmet.peek()
    expect(lang).toEqual('en')
    expect(title).toEqual('Home | Devpendent')
    expect(metaTags.find(tag => tag.name === 'description').content).toEqual(
      newDescription
    )
    expect(metaTags.find(tag => tag.name === 'keywords').content).toEqual(
      'Indonesia, election, real count'
    )
    expect(metaTags.find(tag => tag.property === 'og:title').content).toEqual(
      'Home'
    )
    expect(
      metaTags.find(tag => tag.property === 'og:description').content
    ).toEqual(newDescription)
  })
})
