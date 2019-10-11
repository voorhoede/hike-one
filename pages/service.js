import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import getDateFormat from '../components/_helpers/getDateFormat'
import {
  CaseExtractSmall,
  Company,
  Contact,
  ContactShapes,
  FiftyFifty,
  Footer,
  Layout,
  MenuBar,
  PageHeaderNew,
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
        <PageHeaderNew
          animation={data.header.animation}
          title={data.header.title}
        />

        <div className={`page-scrolling-content-small`}>
          <TabSelector selectedItem={data.slug} services={services} />

          <TextCenter title={data.introTitle} text={data.introText} />

          <div className="company-overview container clearfix">
            {data.companyReference.map((company, index) => (
              <Company
                key={index}
                logo={company.logo.url}
                name={company.name}
              />
            ))}
          </div>

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
            {data.updateLinks.map((item, index) => (
              <UpdateLink
                key={index}
                authors={item.authors}
                date={getDateFormat(item.date)}
                link={item.externalLink}
                slug={item.slug}
                target={item.externalLink}
                topic={item.topic}
                title={item.title}
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
