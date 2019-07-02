import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  Footer,
  Layout,
  MenuBar,
  PageHeader,
  UpdateOverview,
} from '../components'

const Updates = ({ data = {}, footer = {}, updates = [], fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title="Hike One - Updates"
    fontsLoaded={fontsLoaded}
    seo={data.seo}
    url={fullUrl}>
    <main className="main js-main">

      <MenuBar color="white" />

      <article className="article">
        <PageHeader
          isSmall={true}
          title={data.header.title}
          subtitle={data.header.subtitle}
          image={data.header.backgroundImage.url}
        />

        <div className={`page-scrolling-content-small`}>
          <UpdateOverview
            data={data}
            updatesData={updates}
          />
        </div>

      </article>

      <Footer form={footer.form} />

    </main>
  </Layout>
)

Updates.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, data, updates] = await fetchAll(['footer', 'update-overview', 'update-extracts'])

  updates.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { data, footer, updates, fontsLoaded, fullUrl }
}

Updates.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
  updates: PropTypes.array,
}

export default Updates
