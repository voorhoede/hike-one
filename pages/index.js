import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';

import FeedsBlock from '../components/feeds-block/feeds-block';
import CaseExtract from '../components/case-extract/case-extract';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from  '../components/page-header/page-header-shapes';

import TextCenter from '../components/text-center/text-center';

import ServicesOverviewSmall from '../components/services-overview-small/services-overview-small';

import scrollToElement from '../components/_helpers/scrollToElement';
import cookie from '../components/_helpers/cookie';

const Home = ({Data, fontsLoaded}) => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Home" fontsLoaded={fontsLoaded}>
			<main className="main js-main" >
				<MenuBar color="black" />
				<article className="article">
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						title={Data.headerTitle}
						subtitle={Data.headerSubtitle}
						heroImage={Data.headerImage.url} >
						<PageHeaderShapes.variation1Front position="front" />
						<PageHeaderShapes.variation1Back position="back" />
					</PageHeader>

					<ServicesOverviewSmall
						classes={scrollToTargetClass}
						title={Data.servicesItemTitle}
						services={Data.serviceItems} />

					<TextCenter
						classes="text-center-font-medium text-center-spacing-small"
						title={Data.caseExtractTitle}
						text={Data.caseExtractIntro} />

					<CaseExtract
						headerImage={Data.caseExtract.image.url}
						title={Data.caseExtract.title}
						subtitle={Data.caseExtract.subtitle}
						slug="gone-in-60-seconds" />

					<TextCenter
						classes="text-center-font-medium text-center-spacing-small"
						title={Data.eventsTitle}
						text={Data.eventsIntro} />

					<FeedsBlock />

					<Contact
						title={Data.contact.title}
						button={Data.contact.button} >
						<ContactShapes.variation1Front position="front" />
					</Contact>

				</article>
				<Footer />
			</main>
		</Layout>
	);
};

Home.getInitialProps = async ({req}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const Data = await fetch(`${baseUrl}/api/home`).then(res => res.json());
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {Data, fontsLoaded};
};

export default Home;
