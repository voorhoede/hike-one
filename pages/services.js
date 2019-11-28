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
  ServicesOverview,
  ServicesOverviewPage,
} from '../components'

const Home = ({ data = {}, footer = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title="Hike One - Services"
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

        <div className="services-overview-page page-scrolling-content-small">
          <ServicesOverview
            title={data.servicesItemTitle}
            body={data.servicesItemBody}
            services={data.serviceItems}
          />

          <ServicesOverviewPage
            highlightedCasesTitle={data.highlightedCasesTitle}
            highlightedCasesBody={data.highlightedCasesBody}
            highlightedCases={data.highlightedCases}
            highlightedUpdatesTitle={data.highlightedUpdatesTitle}
            highlightedUpdatesBody={data.highlightedUpdatesBody}
            highlightedUpdates={data.highlightedUpdates}
          />
        </div>
      </article>

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
