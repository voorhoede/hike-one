import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import scrollToElement from '../components/_helpers/scrollToElement'
import cookie from '../components/_helpers/cookie'
import {
  CaseExtract,
  Contact,
  ContactShapes,
  Footer,
  Layout,
  MenuBar,
  PageHeader,
  PageHeaderShapes,
  ServicesOverview,
  TextCenter,
  UpdateExtractSmall,
  UpdateOverviewSmall,
} from '../components'

const scrollToTargetClass = 'js-scroll-to-target'

const Home = ({ data = {}, footer = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title="Hike One - Home"
    fontsLoaded={fontsLoaded}
    seo={data.seo}
    url={fullUrl}>
    <main className="main js-main">

      <MenuBar color="white" />

      <article className="article">
        <PageHeader
          onClickScrollButton={() => scrollToElement(scrollToTargetClass)}
          video={data.header.video}
          title={data.header.title}
          subtitle={data.header.subtitle}
          image={data.header.backgroundImage.url}
          showGradient={data.header.displayGradient}>
          <PageHeaderShapes.variation1Front position="front" />
          <PageHeaderShapes.variation1Back position="back" />
        </PageHeader>

        <div className={`${scrollToTargetClass} page-scrolling-content`}>

          <ServicesOverview
            title={data.servicesItemTitle}
            services={data.serviceItems}
          />

          <TextCenter
            classes="text-center-font-medium text-center-spacing-small"
            title={data.caseExtractTitle}
            text={data.caseExtractIntro}
          />

          <CaseExtract
            color={data.caseExtract.case.caseThemeColor.hex}
            companyName={data.caseExtract.case.companyName}
            headerImage={data.caseExtract.image.url}
            title={data.caseExtract.title}
            subtitle={data.caseExtract.subtitle}
            slug={data.caseExtract.case.slug}
          />

          <TextCenter
            classes="text-center-font-medium text-center-spacing-small"
            title={data.eventsTitle}
            text={data.eventsIntro}
          />

          <UpdateOverviewSmall>
            {data.updateLinks.map((item, index) => (
              <UpdateExtractSmall
                key={index}
                index={index}
                title={item.title}
                date={item.date}
                authors={item.authors}
                href={item.link}
                image={item.image.url}
                category={item.category.name}
                color={item.themeColor.hex}
                target={item.isExternalLink}
              />
            ))}
          </UpdateOverviewSmall>

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

Home.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, data] = await fetchAll(['footer', 'home'])

  return { data, footer, fontsLoaded, fullUrl }
}

Home.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Home
