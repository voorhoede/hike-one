import React from 'react'
import PropTypes from 'prop-types'
import cookie from '../components/_helpers/cookie'
import getData from '../lib/get-data'

import {
  ContactForm,
  Footer,
  Layout,
  MenuBar,
  OfficeOverview,
  OfficeCard,
  PageHeader,
  TextCenter,
  TextCenterShapes,
  VacancyCard,
} from '../components'

const Contact = ({ Data = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout title="Hike One - Contact" fontsLoaded={fontsLoaded} seo={Data.seo} url={fullUrl}>
    <main className="main js-main">
      <MenuBar color="white" />

      <article className="article">
        <PageHeader
          isSmall={true}
          title={Data.header.title}
          subtitle={Data.header.subtitle}
          image={Data.header.backgroundImage.url}
        />

        <div className="page-scrolling-content-small">
          <ContactForm form={Data.contactForm} />

          <TextCenter classes="text-center-font-large contact-text-center" text={Data.content}>
            <TextCenterShapes.variation2Back position="back" />
          </TextCenter>

          <VacancyCard data={Data.vacancyCard} />

          <OfficeOverview header={Data.officesHeader}>
            {Data.office.map((item, index) => (
              <OfficeCard
                key={index}
                index={index}
                location={item.location}
                address={item.address}
                postcode={item.postcode}
                city={item.city}
                country={item.country}
                locationUrl={item.locationUrl}
                imageUrl={item.image.url}
              />
            ))}
          </OfficeOverview>
        </div>
      </article>

      <Footer
        callToActionLabel={Data.footer.callToActionLabel}
        callToActionUrl={Data.footer.callToActionUrl}
      />
    </main>
  </Layout>
)

Contact.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const data = await getData(baseUrl, 'contact', res)
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

  return { Data: data, fontsLoaded, fullUrl }
}

Contact.propTypes = {
  Data: PropTypes.object,
  fontsLoaded: PropTypes.bool,
  fullUrl: PropTypes.string,
}

export default Contact
