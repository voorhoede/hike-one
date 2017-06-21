import React from 'react';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ServicesIntro from '../components/services-intro/services-intro';
import ServiceApproach from '../components/services-approach/service-approach';
import ServicesOverview from '../components/services-overview/services-overview';
import ServicesContact from '../components/services-contact/services-contact';

class Services extends React.Component {
	render() {
		return (
			<main>
				<Header/>
				<article>
					<ServicesIntro/>
					<ServiceApproach/>
					<ServicesOverview/>
				</article>
				<ServicesContact/>
				<Footer/>
			</main>
		);
	}
}

export default Services;
