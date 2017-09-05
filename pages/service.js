import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import Contact from '../components/contact/contact';
import CaseExtractSmall from '../components/case-extract-small/case-extract-small';
import * as ContactShapes from '../components/contact/contact-shapes';
import FiftyFifty from '../components/50-50/50-50';
import PageHeaderSmall from '../components/page-header-small/page-header-small';
import * as PageHeaderSmallShapes from '../components/page-header-small/page-header-small-shapes';
import TextCenter from '../components/text-center/text-center';
import WorkOverview from '../components/work-overview/work-overview';
import TabSelector from '../components/tab-selector/tab-selector';
import CompanyOverviewSmall from '../components/company-overview-small/company-overview-small';
// TODO add correct endpoint for company ref
import DataService from '../data/current/home.json';

import cookie from '../components/_helpers/cookie';
import services from '../data/current/services.json';

const Service = ({Data, fontsLoaded}) => (
	<Layout title={`Hike One - ${Data.title}`} fontsLoaded={fontsLoaded}>
		<main className="main js-main">
			<MenuBar/>
			<article className="article">
				<PageHeaderSmall
					classes="pageheader-no-margin"
					title="Our Services">
					<PageHeaderSmallShapes.variation2Front position="front"/>
					<PageHeaderSmallShapes.variation1Back position="back"/>
				</PageHeaderSmall>

				<TabSelector
					selectedItem={Data.slug}
					services={services} />

				<TextCenter
					title={Data.introTitle}
					text={Data.introText} />

				<CompanyOverviewSmall services={DataService.serviceItems} />

				{ Data.content.map((component, index) => {
					switch (component.itemType) {
						case '40_60_text_right':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									text={component.text}
									imageLarge="true"
									image={component.image.url} >
								</FiftyFifty>
							);

						case '40_60_text_left':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									contentLeft="true"
									text={component.text}
									imageLarge="true"
									image={component.image.url} >
								</FiftyFifty>
							);
					}
				})}

				<TextCenter title={Data.caseExtractTitle} />

				<WorkOverview>
					{ Data.caseExtract.map((item, index) => (
						<CaseExtractSmall
							key={index}
							title={item.title}
							subtitle={item.headerSubtitle}
							image={item.headerBackgroundImage}
							companyName={item.companyName}
							color={item.caseThemeColor.hex}
							slug={item.slug} />
					))}
				</WorkOverview>

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

Service.getInitialProps = async ({req, query}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(`${baseUrl}/api/services/${query.slug}`);
	const json = await res.json();

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data: json, fontsLoaded};
};

export default Service;
