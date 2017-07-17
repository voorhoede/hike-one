import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ServicesIntro from '../components/services-intro/services-intro';
import ServiceApproach from '../components/services-approach/service-approach';
import ServicesOverview from '../components/services-overview/services-overview';
import CTABlock from '../components/cta-block/cta-block';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import Data from '../data/current/services/services.json';

class Services extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Services">
				<main className="main js-main">
					<Header/>
					<article className="article">
						<ServicesIntro title={Data.headerTitle} buttonLabel={Data.headerReadmoreCta}/>
						<ServiceApproach text={Data.introText} />
						<ServicesOverview title={Data.overviewTitle} items={Data.overviewItems} />
						<Contact
							parallaxLayerFront={<ContactShapes.FrontLayer1 />}
							title={Data.contactTitle} button={Data.contactButton} />
					</article>
					<CTABlock title={Data.callToActionBlockTitle} button={Data.callToActionBlockButton} image="static/images/img-team.jpg" />
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Services;
