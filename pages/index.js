import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';

import PageHeader from '../components/page-header/page-header';
import CaseExtract from '../components/case-extract/case-extract';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import TextCenter from '../components/text-center/text-center';

import ServicesOverviewSmall from '../components/services-overview-small/services-overview-small';

import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverviewSmall from '../components/update-overview-small/update-overview-small';

import scrollToElement from '../components/_helpers/scrollToElement';
import cookie from '../components/_helpers/cookie';

const Home = ({Data, fontsLoaded}) => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Home"
			fontsLoaded={fontsLoaded}
			seo={Data.seo}
			keywords={Data.keywords}>
			<main className="main js-main" >
				<MenuBar color="white" />
				<article className="article">			
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						video={Data.header.video}
						title={Data.header.title}
						subtitle={Data.header.subtitle}
						image={Data.header.backgroundImage.url}
						showGradient={Data.header.displayGradient} />

					<div className={`${scrollToTargetClass} page-scrolling-content`}>
						<ServicesOverviewSmall
							title={Data.servicesItemTitle}
							services={Data.serviceItems} />

						<TextCenter
							classes="text-center-font-medium text-center-spacing-small"
							title={Data.caseExtractTitle}
							text={Data.caseExtractIntro} />

						<CaseExtract
							color={Data.caseExtract.case.caseThemeColor}
							companyName={Data.caseExtract.case.companyName}
							headerImage={Data.caseExtract.image.url}
							title={Data.caseExtract.title}
							subtitle={Data.caseExtract.subtitle}
							slug={Data.caseExtract.case.slug} />

						<TextCenter
							classes="text-center-font-medium text-center-spacing-small"
							title={Data.eventsTitle}
							text={Data.eventsIntro} />

						<UpdateOverviewSmall>
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
						</UpdateOverviewSmall>

						<Contact
							title={Data.contact.title}
							button={Data.contact.button} >
							<ContactShapes.variation1Front position="front" />
						</Contact>
					</div>
				</article>
				<Footer
					callToActionLabel={Data.footer.callToActionLabel}
					callToActionUrl={Data.footer.callToActionUrl} />
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
