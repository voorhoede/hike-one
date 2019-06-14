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
  ServicesOverviewSmall,
  TextCenter,
  UpdateExtractSmall,
  UpdateOverviewSmall,
} from '../components'

const scrollToTargetClass = 'js-scroll-to-target'

const Home = ({ Data = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout title="Hike One - Home" fontsLoaded={fontsLoaded} seo={Data.seo} url={fullUrl}>
    <main className="main js-main">
      <MenuBar color="white" />
      <article className="article">
        <PageHeader
          onClickScrollButton={() => scrollToElement(scrollToTargetClass)}
          video={Data.header.video}
          title={Data.header.title}
          subtitle={Data.header.subtitle}
          image={Data.header.backgroundImage.url}
          showGradient={Data.header.displayGradient}>
          <PageHeaderShapes.variation1Front position="front" />
          <PageHeaderShapes.variation1Back position="back" />
        </PageHeader>

          <div className={`${scrollToTargetClass} page-scrolling-content`}>
            <ServicesOverviewSmall
              title={Data.servicesItemTitle}
              services={Data.serviceItems}
            />
          )}

          <ServicesOverviewSmall
            title={Data.servicesItemTitle}
            services={Data.serviceItems}
          />

          <TextCenter
            classes="text-center-font-medium text-center-spacing-small"
            title={Data.caseExtractTitle}
            text={Data.caseExtractIntro}
          />

          <CaseExtract
            color={Data.caseExtract.case.caseThemeColor.hex}
            companyName={Data.caseExtract.case.companyName}
            headerImage={Data.caseExtract.image.url}
            title={Data.caseExtract.title}
            subtitle={Data.caseExtract.subtitle}
            slug={Data.caseExtract.case.slug}
          />

          <TextCenter
            classes="text-center-font-medium text-center-spacing-small"
            title={Data.eventsTitle}
            text={Data.eventsIntro}
          />

          <UpdateOverviewSmall>
            {Data.updateLinks.map((item, index) => (
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
            title={Data.contact.title}
            button={Data.contact.button}
            link={Data.contact.externalLink}>
            <ContactShapes.variation1Front position="front" />
          </Contact>

        </div>
      </article>

      <Footer form={Data.footer.form} />

    </main>
  </Layout>
)

Home.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const data = await getData(baseUrl, 'home', res)
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

  return { Data: data, fontsLoaded, fullUrl }
}

Home.propTypes = {
  Data: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Home
