import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import getDateFormat from '../components/_helpers/getDateFormat'
import {
  CaseExtractSmall,
  CompanyOverviewItemSmall,
  CompanyOverviewSmall,
  Contact,
  ContactShapes,
  FiftyFifty,
  Footer,
  Layout,
  MenuBar,
  PageHeader,
  TabSelector,
  TextCenter,
  UpdateLink,
  UpdateLinks,
  WorkOverview,
} from '../components'

const Service = ({ data = {}, footer = {}, services = [], fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    canonicalUrl={data.canonical}
    title={`Hike One - ${data.title}`}
    fontsLoaded={fontsLoaded}
    seo={data.seo}
    url={fullUrl}>
    <main className="main js-main service-page">

      <MenuBar color="white" />

      <article className="article">
        <PageHeader
          isSmall={true}
          title={data.header.title}
          subtitle={data.header.subtitle}
          image={data.header.backgroundImage.url}
        />

        <div className={`page-scrolling-content-small`}>
          <TabSelector selectedItem={data.slug} services={services} />

          <TextCenter title={data.introTitle} text={data.introText} />

          <CompanyOverviewSmall>
            {data.companyReference1.map((service, index) => (
              <CompanyOverviewItemSmall
                companyLogo={service.companyLogo.url}
                referenceCaseLink=""
                referenceSlug=""
                text={service.text}
                key={index}
              />
            ))}
          </CompanyOverviewSmall>

          {data.content.map((component, index) => {
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

          <Contact
            title={data.contact.title}
            button={data.contact.button}
            link={data.contact.externalLink}>
            <ContactShapes.variation1Front position="front" />
          </Contact>

          <WorkOverview header={data.caseExtractTitle}>
            {data.caseExtract.map((item, index) => (
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
            {data.updateLinks.map((update, index) => (
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

      <Footer form={footer.form} />

    </main>
  </Layout>
)

Service.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, data, services, updates] = await fetchAll([ 'footer', `services/${query.slug}`, 'services', 'update-extracts' ])

  return { data, footer, services, updates, fontsLoaded, fullUrl }
}

Service.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  services: PropTypes.array,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Service
