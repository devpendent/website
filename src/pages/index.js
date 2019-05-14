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
    <h2>Mengapa Perlu Ada Devpendent?</h2>
    <p>
      Berdasarkan pengamatan kasar kami, saat ini ada empat pihak yang terlibat
      dalam proses perhitungan hasil perolehan suara Pemilu, antara lain:
    </p>
    <ol>
      <li>
        Surveyor <span>Quick Count</span> yang pengambilan sampelnya relatif
        sedikit menurut sekelompok orang, sehingga menimbulkan polemik di
        masyarakat. Meskipun proses pengambilan sampelnya dinyatakan ilmiah,
        tetap tidak dapat dimungkiri ini mengakibatkan pro-kontra di masyarakat.
      </li>
      <li>
        <span>Real Count</span> KPU yang dirasa terlalu lambat karena
        menggunakan sistem perhitungan yg berjenjang. Sistem ini harus
        diterapkan demi menjaga keabsahan suara di mata hukum.
      </li>
      <li>
        Beberapa situs <span>crowdsourcing</span> yang teragregasi di
        [realcount.id](https://realcount.id/#/) tampak mengalami kesulitan dalam
        melakukan rekapitulasi suara dengan cepat karena keterbatasan jumlah
        relawan.
      </li>
      <li>
        Di lain sisi, para peserta Pemilu memiliki jaringan yang paling luas,
        karena mereka bisa dipastikan mengirimkan saksi-saksi di setiap TPS.
        Namun sayangnya mereka tidak memiliki media yang memadai untuk
        mengumumkan hasil perhitungan suara internalnya ke publik.
      </li>
    </ol>
    <p>
      Dari sinilah kami merasa tergerak untuk memfasilitasi para peserta Pemilu
      untuk dapat memiliki akses terhadap aplikasi atau sistem secanggih KPU
      dan/atau beberapa situs crowdsourcing lainnya.
    </p>
    <p>
      Harapan kami, dengan dikembangkannya platform ini secara terbuka, seluruh
      pihak yang berkepentingan bebas untuk menggunaka platform ini di manapun.
      Tentunya kualitas konten yang disajikan melalui platform ini menjadi
      tanggung jawab masing-masing pihak tersebut.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/submit/'>Submit Form C1</Link> |{' '}
    <Link to='/page-2/'>Go to page 2</Link> |{' '}
    <Link to='/blog/sample-markdown-post'>Markdown Sample Page</Link>
  </Layout>
)

export default IndexPage
