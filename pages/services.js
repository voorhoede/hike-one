import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  Footer,
  Layout,
  MenuBar,
} from '../components'

const Home = ({ data = {}, footer = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title="Hike One - Home"
    fontsLoaded={fontsLoaded}
    seo={data.seo}
    url={fullUrl}>
    <main className="main js-main">

      <MenuBar color="white" />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      <Footer form={footer.form} />

    </main>
  </Layout>
)

Home.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, data] = await fetchAll(['footer', 'services-overview'])

  return { data, footer, fontsLoaded, fullUrl }
}

Home.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Home
