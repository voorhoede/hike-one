import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';

import ReadMore from '../components/read-more/read-more';
import CaseHeader from '../components/case-header/case-header';

import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';

import Collage from '../components/collage/collage';
import * as CollageShapes from '../components/collage/collage-shapes';

import ImageCombo from '../components/image-combo/image-combo';
import * as ImageComboShapes from '../components/image-combo/image-combo-shapes';

import FiftyFifty from '../components/50-50/50-50';
import * as FiftyFiftyShapes from '../components/50-50/50-50-shapes';

import QuoteBlock from '../components/quote-block/quote-block';
import FullWidthImage from '../components/full-width-image/full-width-image';
import LogoList from '../components/logo-list/logo-list';

import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import TextCard from '../components/text-card/text-card';

import scrollToElement from '../components/_helpers/scrollToElement';
import setComponentCounter from '../components/_helpers/setParallaxComponentCounter';
import cookie from '../components/_helpers/cookie';

// object with parallax shape layer variations for every type of component
// combined with the componentCounter object a specific variantion is chosen for each component
const parallaxLayersMap = {
	'40_60_text_right': [
		[<FiftyFiftyShapes.TextRightSmall1Front position="front" key="1"/>]
	],
	'40_60_text_left': [
		[<FiftyFiftyShapes.TextLeftSmall1Back position="back" key="1"/>]
	],
	'50_50_text_left': [
		[<FiftyFiftyShapes.TextLeftSmall1Back position="back" key="1"/>]
	],
	'50_50_text_right': [
		[<FiftyFiftyShapes.TextRight1Back position="back" key="1"/>]
	],
	'image_combo':[
		[<ImageComboShapes.WithText1Front position="front" key="1"/>],
		[<ImageComboShapes.WithoutText1Front position="front" key="1"/>]
	],
	'collage': [
		[<CollageShapes.variation1Front position="front" key="1" />, <CollageShapes.variation1Back position="back" key="2"/>]
	]
};

// object that counts how many times a component is used on this page
// this is done by the `setComponentCounter` function
let componentCounter = {};
const scrollToTargetClass = 'js-scroll-to-target';

const Case = ({Data, fontsLoaded}) => (
	<Layout title={`Hike One - ${Data.title}`} fontsLoaded={fontsLoaded}>
		<main className="main js-main">
			<MenuBar color="white" />
			<article className="article">
				<CaseHeader
					onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
					video={Data.headerVideo}
					title={Data.title}
					subtitle={Data.headerSubtitle}
					image={Data.headerBackgroundImage.url} />

				<div className={`${scrollToTargetClass} case-scrolling-content`}>
					<TextCenter
						title={Data.introTitle}
						text={Data.introText}>
						<TextCenterShapes.variation1Back position="back" />
					</TextCenter>

					{ Data.components.map((component, index) => {
						const itemType = component.itemType;
						// set component count
						componentCounter = setComponentCounter(componentCounter, itemType, parallaxLayersMap);
						const count = componentCounter[itemType];

						// if a parallax variation layer is available then use that one
						const parallaxLayers = componentCounter[itemType] !== null
							? parallaxLayersMap[itemType][count]
							: '';

						switch (itemType) {
							case '40_60_text_right':
								return (
									<FiftyFifty
										key={index}
										title={component.title}
										text={component.text}
										imageLarge="true"
										image={component.image.url} >
										{ parallaxLayers }
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
										{ parallaxLayers }
									</FiftyFifty>
								);
							case '50_50_text_right':
								return (
									<FiftyFifty
										key={index}
										title={component.title}
										text={component.text}
										image={component.image.url}>
										{ parallaxLayers }
									</FiftyFifty>
								);
							case '50_50_text_left':
								return (
									<FiftyFifty
										key={index}
										contentLeft="true"
										title={component.title}
										text={component.text}
										image={component.image.url}>
										{ parallaxLayers }
									</FiftyFifty>
								);
							case 'image_combo':
								return (
									<ImageCombo
										key={index}
										classes={ component.textTitle ? 'image-combo-text': ''} >

										{ component.textTitle &&
										<TextCard
											title={component.textTitle}
											text={component.textContent} />
										}

										<FullWidthImage
											image={component.image.url}
											index={index}/>

										{ component.quoteAuthorTitle &&
											<QuoteBlock
												color={component.quoteColor.color }
												alignment={component.quoteAlignLeft ? 'text-block-left' : 'text-block-right' }
												quote={component.quote}
												citeName={component.quoteAuthorName}
												citeTitle={component.quoteAuthorTitle}
												citeImage={component.quoteAuthorImage.url} />
										}
										{ parallaxLayers }
									</ImageCombo>
								);
							case 'collage':
								return (
									<Collage
										key={index}
										title={component.title}
										text={component.text}
										imageMedium={component.imageBig.url}
										imageSmall={component.imageSmall.url}>
										{ parallaxLayers }
									</Collage>
								);
							case 'full_width_image':
								return (
									<FullWidthImage
										key={index}
										index={index}
										image={component.image.url}
										title={component.title}
										subtitle={component.subtitle} />
								);
							case 'collaboration':
								return (
									<div key={index}>
										<TextCenter
											title={component.title}
											text={component.text} />

										<LogoList companies={component.companies} />
									</div>
								);

							case 'text_center':
								return (
									<div key={index}>
										<TextCenter
											title={component.title}
											text={component.text} />
									</div>
								);
						}
					})}

					<Contact
						title="Where will your journey lead us"
						button="Get in touch" >
						<ContactShapes.variation1Front position="front" />
					</Contact>

					<ReadMore
						highlight={{
							"image": "/static/images/img-vbh.jpg",
							"title": "VBH Pivot App",
							"href": "#",
							"linkLabel": "View case"
						}}
						links={[
							{
								"title": "Your  first Design Sprint: do these 3 things first",
								"subtext": "24 November 2016 | Matthijs Collard & Martijn Pillich"
							},
							{
								"title": "In 5 days from sketch to tested prototype with Design Sprints",
								"subtext": "17 November 2016 | Ingmar Coenen"
							}
						]} />
				</div>
			</article>
			<Footer />
		</main>
	</Layout>
);

Case.getInitialProps = async ({req, query}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(`${baseUrl}/api/cases/${query.slug}`);
	const json = await res.json();

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {Data: json, fontsLoaded};
};

export default Case;
