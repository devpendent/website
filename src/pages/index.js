import Image from 'components/image'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { Link } from 'gatsby'
import React from 'react'

const IndexPage = () => (
  <Layout>
    <SEO keywords={[`gatsby`, `application`, `react`]} title='Home' />
    <h1>Platform Rekapitulasi Suara Pemilu</h1>
    <h2>Apakah Devpendent itu?</h2>
    <p>
      Devpendent adalah sebuah platform untuk rekapitulasi suara perolehan dalam
      Pemilihan Umum dan Pemilihan Kepala Daerah di Indonesia. Platform ini
      dikembangkan dengan lisensi kode sumber terbuka{' '}
      <span>(Open Source License)</span> sehingga dapat digunakan oleh siapapun
      yang memiliki kepentingkan untuk melakukan rekapitulasi suara.
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
