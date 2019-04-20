import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'components/image'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { Link } from 'gatsby'
import React from 'react'
const IndexPage = () => (
  <Layout>
    <SEO keywords={[`gatsby`, `application`, `react`]} title='Home' />
    <h1>Hi people</h1>

    <div>Test fontAwesome</div>
    <FontAwesomeIcon icon='fa-facebook-square' />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
