import Layout from 'components/layout'
import SEO from 'components/seo'
import SubmitForm from 'components/submit-form'
import { Link } from 'gatsby'
import React from 'react'

const Submit = () => (
  <Layout>
    <SEO title='Submit' />
    <h1>Upload dan Input Manual C1</h1>
    <SubmitForm />
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default Submit
