import React from 'react';
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

import "isomorphic-fetch";

const productData = {
	title: 'New product design',
	color: 'blue',
	target: '#newproductdesign'
}

const designData = {
	title: 'UX / UI Design',
	color: 'green',
	target: '#design'
}

const trainingData = {
	title: 'Training & Academy',
	color: 'purple',
	target: '#training'
}

const Service = ({Data}) => (
	<Layout title={`Hike One - ${Data.title}`}>
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
					product={productData}
					design={designData}
					training={trainingData} />

				<TextCenter
					title={Data.introTitle}
					text={Data.introText}/>

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

// get service data on server
Service.getInitialProps = async ({req, query}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(`${baseUrl}/api/services/${query.slug}`);
	const json = await res.json();
	return { Data: json };
};

export default Service;
