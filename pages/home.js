import React from 'react';

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
import * as TextCenterShapes from '../components/text-center/text-center-shapes';

import ServicesOverviewSmall from '../components/services-overview-small/services-overview-small';

import Data from '../data/current/home/home.json';
import scrollToElement from '../components/_helpers/scrollToElement';

const Home = () => {
	let scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Home">
			<main className="main js-main" >
				<MenuBar color="black" />
				<article className="article-full-width">
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						title={Data.headerTitle}
						subtitle={Data.headerSubtitle}
						heroImage={Data.headerImage.url} >
						<PageHeaderShapes.variation1Front position="front" />
						<PageHeaderShapes.variation1Back position="back" />
					</PageHeader>

					<TextCenter
						classes={`text-center-font-large text-center-spacing-large ${scrollToTargetClass}`}
						text={Data.introText} >
						<TextCenterShapes.variation2Front position="front"/>
						<TextCenterShapes.variation2Back position="back" />
					</TextCenter>

					<ServicesOverviewSmall services={Data.overviewItems} />

					<TextCenter
						classes="text-center-font-medium text-center-spacing-small"
						text={Data.caseExtractIntro} />

					<CaseExtract
						headerImage={Data.caseExtract.image.url}
						title={Data.caseExtract.title}
						subtitle={Data.caseExtract.subtitle}
						link="/case" />

					<TextCenter
						classes="text-center-font-medium text-center-spacing-small"
						text={Data.eventsIntro} />
					<FeedsBlock />

					<Contact
						title="Where will your journey lead us"
						button="Get in touch" >
						<ContactShapes.variation1Front position="front" />
					</Contact>

				</article>
				<Footer />
			</main>
		</Layout>
	);

};

export default Home;
