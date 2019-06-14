import React from 'react'
import PropTypes from 'prop-types'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  ContactForm,
  Footer,
  Layout,
  MenuBar,
  OfficeCard,
  OfficeOverview,
  PageHeader,
  TextCenter,
  TextCenterShapes,
  VacancyCard,
} from '../components'

const Contact = ({ data = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title="Hike One - Contact"
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

        <div className="page-scrolling-content-small">
          <ContactForm form={data.contactForm} />

          <TextCenter classes="text-center-font-large contact-text-center" text={data.content}>
            <TextCenterShapes.variation2Back position="back" />
          </TextCenter>

          <VacancyCard data={data.vacancyCard} />

          <OfficeOverview header={data.officesHeader}>
            {data.office.map((item, index) => (
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

      <Footer form={data.footer.form} />

    </main>
  </Layout>
)

Contact.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const data = await getData(baseUrl, 'contact', res)

  return { data, fontsLoaded, fullUrl }
}

Contact.propTypes = {
  data: PropTypes.object,
  fontsLoaded: PropTypes.bool,
  fullUrl: PropTypes.string,
}

export default Contact
