import React from 'react';
import PropTypes from 'prop-types';
import getData from '../lib/get-data';
import cookie from '../components/_helpers/cookie';
import {
  ContactForm,
  Footer,
  Layout,
  MenuBar,
  OfficeCard,
  OfficeOverview,
  PageHeader,
  VacancyOverview
} from '../components';

let scrapeJobs;

if (!process.browser) {
  scrapeJobs = require('../lib/job-scraper/server');
} else {
  scrapeJobs = require('../lib/job-scraper/browser');
}

const Contact = ({
  data = {},
  footer = {},
  fontsLoaded = '',
  fullUrl = '',
  vacanciesOverview = {},
  vacancies = []
}) => (
  <Layout
    title='Hike One - Contact'
    fontsLoaded={fontsLoaded}
    seo={data.seo}
    url={fullUrl}
  >
    <main className='main js-main contact-page'>
      <MenuBar color='white' />

      <article className='article'>
        <PageHeader
          isSmall={true}
          title={data.header.title}
          subtitle={data.header.subtitle}
          image={data.header.backgroundImage.url}
        />

        <div className='page-scrolling-content-small'>
          <div className="contact-details container">
            <h2>Contact us at</h2>
            <a className="contact-details__tel" href="tel:+31-202044577">+31 20 204 45 77</a>
            <a className="contact-details__mail" href="mailto:hello@hike.one">hello@hike.one</a>
          </div>
          <ContactForm
            form={data.contactForm}
            showBody={false}
            singleForm={true}
          />
          <VacancyOverview overview={vacanciesOverview} vacancies={vacancies} />
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

      <Footer form={footer.form} />
    </main>
  </Layout>
);

Contact.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const fontsLoaded = req
    ? req.cookies['fonts-loaded']
    : cookie('fonts-loaded');
  const fullUrl = `${baseUrl}${asPath}`;
  const fetchJson = model => getData(baseUrl, model, res);
  const fetchAll = models => Promise.all(models.map(fetchJson));
  const [footer, data, vacanciesOverview] = await fetchAll([
    'footer',
    'contact',
    'vacancies-overview'
  ]);

  const vacancies = await fetch(
    `https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`
  )
    .then(response => response.text())
    .then(await scrapeJobs);

  return {
    data,
    fontsLoaded,
    footer,
    fullUrl,
    vacancies,
    vacanciesOverview
  };
};

Contact.propTypes = {
  data: PropTypes,
  fontsLoaded: PropTypes.string,
  footer: PropTypes.object,
  fullUrl: PropTypes.string,
  vacancies: PropTypes.array,
  vacanciesOverview: PropTypes.object
};

export default Contact;
