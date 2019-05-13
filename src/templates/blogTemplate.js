import Layout from 'components/layout'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import React from 'react'

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div className='blog-post-container'>
        <div className='blog-post'>
          <h2>{frontmatter.date}</h2>
          <div
            className='blog-post-content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
export default Template
