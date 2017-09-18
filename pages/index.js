import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';

import PageHeaderLarge from '../components/page-header-large/page-header-large';
import CaseExtract from '../components/case-extract/case-extract';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from  '../components/page-header/page-header-shapes';

import TextCenter from '../components/text-center/text-center';

import ServicesOverviewSmall from '../components/services-overview-small/services-overview-small';

import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverview from '../components/update-overview/update-overview';

import scrollToElement from '../components/_helpers/scrollToElement';
import cookie from '../components/_helpers/cookie';

const Home = ({Data, fontsLoaded}) => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Home" fontsLoaded={fontsLoaded}>
			<main className="main js-main" >
				<MenuBar color="white" />
				<article className="article">
					<PageHeaderLarge
					onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
					video={Data.headerVideo}
					title={Data.headerTitle}
					subtitle={Data.headerSubtitle}
					image={Data.headerImage.url} />
					
					<div className={`${scrollToTargetClass} page-scrolling-content`}>
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

						<UpdateOverview toUpdates={true} >
							{ Data.updateLinks.map((item, index) => (
								<UpdateExtractSmall
									key={index}
									index={index}
									title={item.title}
									date={item.date}
									author={item.author.name}
									target={item.link}
									image={item.image.url}
									category={item.category.name}
									color={item.themeColor.hex} />
							))}
						</UpdateOverview>

						<Contact
							title={Data.contact.title}
							button={Data.contact.button} >
							<ContactShapes.variation1Front position="front" />
						</Contact>
					</div>
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
