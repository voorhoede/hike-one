import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from '../components/page-header/page-header-shapes';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';

import ServicesOverview from '../components/services-overview/services-overview';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import Data from '../data/current/services/services.json';
import scrollToElement from '../components/_helpers/scrollToElement';

const Services = () => {
	let scrollToTargetClass = 'js-scroll-to-target';
	return (
		<Layout title="Hike One - Services">
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						title="We help you build great digital products using human-centered design methods"
						subtitle="Our services"
						heroImage="static/images/service-header.jpg">
						<PageHeaderShapes.variation2Front position="front"/>
						<PageHeaderShapes.variation1Back position="back"/>
					</PageHeader>

					<TextCenter
						classes={scrollToTargetClass}
						text={Data.introText} >
						<TextCenterShapes.variation2Front position="front" />
					</TextCenter>

					<ServicesOverview title={Data.overviewTitle} items={Data.overviewItems} />
					<Contact
						title={Data.contactTitle} button={Data.contactButton}>
						<ContactShapes.variation1Front position="front" />
					</Contact>
					<Footer />
				</article>
			</main>
		</Layout>
	);
};


export default Services;
