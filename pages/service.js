import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'

import Layout from '../components/layout/layout'
import MenuBar from '../components/menu-bar/menu-bar'
import Footer from '../components/footer/footer'
import Contact from '../components/contact/contact'
import * as ContactShapes from '../components/contact/contact-shapes'
import CaseExtractSmall from '../components/case-extract-small/case-extract-small'
import FiftyFifty from '../components/50-50/50-50'
import PageHeader from '../components/page-header/page-header'
import TextCenter from '../components/text-center/text-center'
import WorkOverview from '../components/work-overview/work-overview'
import TabSelector from '../components/tab-selector/tab-selector'
import CompanyOverviewSmall from '../components/company-overview-small/company-overview-small'
import CompanyOverviewItemSmall from '../components/company-overview-item-small/company-overview-item-small'
import UpdateLinks from '../components/update-links/update-links'
import UpdateLink from '../components/update-link/update-link'

import cookie from '../components/_helpers/cookie'
import getDateFormat from '../components/_helpers/getDateFormat'
import getData from '../lib/get-data'

const Service = ({ Data = {}, services = [], fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title={`Hike One - ${Data.title}`}
    fontsLoaded={fontsLoaded}
    seo={Data.seo}
    url={fullUrl}>
    <main className="main js-main service-page">
      <MenuBar color="white" />
      <article className="article">
        <PageHeader
          isSmall={true}
          title={Data.header.title}
          subtitle={Data.header.subtitle}
          image={Data.header.backgroundImage.url}
        />

        <div className={`page-scrolling-content-small`}>
          <TabSelector selectedItem={Data.slug} services={services} />

          <TextCenter title={Data.introTitle} text={Data.introText} />

          <CompanyOverviewSmall>
            {Data.companyReference1.map((service, index) => (
              <CompanyOverviewItemSmall
                companyLogo={service.companyLogo.url}
                referenceCaseLink=""
                referenceSlug=""
                text={service.text}
                key={index}
              />
            ))}
          </CompanyOverviewSmall>

          {Data.content.map((component, index) => {
            switch (component.itemType) {
              case '40_60_text_right':
                return (
                  <FiftyFifty
                    key={index}
                    title={component.title}
                    text={component.text}
                    imageLarge={true}
                    image={component.image}
                  />
                )

              case '40_60_text_left':
                return (
                  <FiftyFifty
                    key={index}
                    title={component.title}
                    contentLeft={true}
                    text={component.text}
                    imageLarge={true}
                    image={component.image}
                  />
                )
            }
          })}

          <Contact title={Data.contact.title} button={Data.contact.button}>
            <ContactShapes.variation1Front position="front" />
          </Contact>

          <WorkOverview header={Data.caseExtractTitle}>
            {Data.caseExtract.map((item, index) => (
              <CaseExtractSmall
                key={index}
                title={item.header.title}
                subtitle={item.header.subtitle}
                image={item.header.backgroundImage}
                companyName={item.companyName}
                color={item.caseThemeColor.hex}
                slug={item.slug}
              />
            ))}
          </WorkOverview>

          <UpdateLinks>
            {Data.updateLinks.map((update, index) => (
              <UpdateLink
                key={index}
                title={update.title}
                authors={update.authors}
                date={getDateFormat(update.date)}
                href={update.link}
                target={update.isExternalLink}
              />
            ))}
          </UpdateLinks>
        </div>
      </article>
      <Footer
        callToActionLabel={Data.footer.callToActionLabel}
        callToActionUrl={Data.footer.callToActionUrl}
      />
    </main>
  </Layout>
)

Service.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const [data, services, updates] = await fetchAll([ `services/${query.slug}`, 'services', 'update-extracts' ])

  return { Data: data, services, updates, fontsLoaded, fullUrl }
}

Service.propTypes = {
  Data: PropTypes.object,
  services: PropTypes.array,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Service
