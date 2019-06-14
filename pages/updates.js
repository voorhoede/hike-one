import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import Layout from '../components/layout/layout'
import MenuBar from '../components/menu-bar/menu-bar'
import Footer from '../components/footer/footer'
import PageHeader from '../components/page-header/page-header'
import UpdateOverview from '../components/update-overview/update-overview'
import cookie from '../components/_helpers/cookie'
import getData from '../lib/get-data'

const Updates = ({ Data = {}, updatesData = [], fontsLoaded = '', fullUrl = '' }) => (
  <Layout title="Hike One - Updates" fontsLoaded={fontsLoaded} seo={Data.seo} url={fullUrl}>
    <main className="main js-main">
      <MenuBar color="white" />

      <article className="article">
        <PageHeader
          isSmall={true}
          title={Data.header.title}
          subtitle={Data.header.subtitle}
          image={Data.header.backgroundImage.url}
        />

        <div className={`page-scrolling-content-small`}>
          <UpdateOverview
            data={Data}
            updatesData={updatesData}
          />
        </div>

      </article>

      <Footer form={Data.footer.form} />

    </main>
  </Layout>
)

Updates.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [Data, updatesData] = await fetchAll(['update-overview', 'update-extracts'])
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  updatesData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { Data, updatesData, fontsLoaded, fullUrl }
}

Updates.propTypes = {
  Data: PropTypes.object,
  updatesData: PropTypes.array,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Updates
