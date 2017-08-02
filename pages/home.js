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
				<article className="article">
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						parallaxLayerFront={ <PageHeaderShapes.FrontLayer1 /> }
						parallaxLayerBack={ <PageHeaderShapes.BackLayer1 /> }
						title={Data.headerTitle}
						subtitle={Data.headerSubtitle}
						heroImage={Data.headerImage.url} />
					<TextCenter
						parallaxLayerFront={ <TextCenterShapes.FrontLayer2 /> }
						parallaxLayerBack={ <TextCenterShapes.BackLayer2 /> }
						classes={`text-center-font-large text-center-spacing-large ${scrollToTargetClass}`}
						text={Data.introText} />
					<ServicesOverviewSmall services={Data.serviceItems} />
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
						parallaxLayerFront={<ContactShapes.FrontLayer1 />}
						title="Where will your journey lead us"
						button="Get in touch" />
				</article>
				<Footer />
			</main>
		</Layout>
	);

};

export default Home;
