import React from 'react';
import "isomorphic-fetch";

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

import scrollToElement from '../components/_helpers/scrollToElement';
import cookie from '../components/_helpers/cookie';

const Services = ({Data, fontsLoaded}) => {
	let scrollToTargetClass = 'js-scroll-to-target';
	return (
		<Layout title="Hike One - Services" fontsLoaded={fontsLoaded}>
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						title={Data.title}
						subtitle={Data.headerSubtitle}
						heroImage={Data.headerImage.url}>
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
						title={Data.contact.title}
						button={Data.contact.button} >
						<ContactShapes.variation1Front position="front" />
					</Contact>
				</article>
				<Footer
					callToActionLabel={Data.footer.callToActionLabel}
					callToActionUrl={Data.footer.callToActionUrl} />
			</main>
		</Layout>
	);
};

Services.getInitialProps = async ({req}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const Data = await fetch(`${baseUrl}/api/service-overview`).then(res => res.json());
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data, fontsLoaded };
};

export default Services;
