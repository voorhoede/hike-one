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

const Updates = ({ data = {}, updates = [], fontsLoaded = '', fullUrl = '' }) => (
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

      <Footer form={data.footer.form} />

    </main>
  </Layout>
)

Updates.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [data, updates] = await fetchAll(['update-overview', 'update-extracts'])
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

  updates.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { data, updates, fontsLoaded, fullUrl }
}

Updates.propTypes = {
  data: PropTypes.object,
  updates: PropTypes.array,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Updates
