import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  CaseExtractSmall,
  Contact,
  ContactShapes,
  Footer,
  Layout,
  LogoCarousel,
  MenuBar,
  PageHeader,
  WorkOverview,
} from '../components'

const Work = ({
  cases = [],
  data = {},
  footer = {},
  fontsLoaded = '',
  fullUrl = ''
}) => (
  <Layout
    canonicalUrl={data.canonical}
    title="Hike One - Case"
    fontsLoaded={fontsLoaded}
    seo={data.seo}
    url={fullUrl}>
    <main className="main js-main">

      <MenuBar color="white" />

      <article className="article work">
        <PageHeader
          isSmall={true}
          title={data.header.title}
          subtitle={data.header.subtitle}
          image={data.header.backgroundImage.url}
        />

        <div className={`page-scrolling-content-small`}>
          <LogoCarousel
            title={data.logoCarousel.title}
            companies={data.logoCarousel.companies}
            animationSpeed={data.logoCarousel.animationSpeed}
          />

          <WorkOverview>
            {cases.map((item, index) => {
              if (item.showInOverview) {
                return (
                  <CaseExtractSmall
                    key={index}
                    title={item.header.title}
                    subtitle={item.header.subtitle}
                    image={item.header.backgroundImage}
                    companyName={item.companyName}
                    color={item.caseThemeColor.hex}
                    slug={item.slug}
                  />
                )
              }
            })}
          </WorkOverview>

          <Contact
            title={data.contact.title}
            button={data.contact.button}
            link={data.contact.externalLink}>
            <ContactShapes.variation1Front position="front" />
          </Contact>

        </div>
      </article>

      <Footer form={footer.form} />

    </main>
  </Layout>
)

Work.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [cases, footer, data] = await fetchAll(['cases', 'footer', 'work'])
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

  return { cases, data, footer, fontsLoaded, fullUrl }
}

Work.propTypes = {
  cases: PropTypes.array,
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Work
