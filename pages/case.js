import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';

import ReadMore from '../components/read-more/read-more';
import CaseIntro from '../components/case-intro/case-intro';

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
import Data from '../data/current/cases/gone-in-60-seconds.json';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">

				<main className="main js-main">
					<Header color="white" />

					<article className="article-full-width">
						<CaseIntro
							video="static/videos/drop-fly-video.mp4"
							title={Data.headerTitle}
							subtitle={Data.headerSubtitle}
							image={Data.headerBackgroundImage.url} />

						<div className="case-scrolling-content">
							<TextCenter
								parallaxLayerBack={<TextCenterShapes.BackLayer1 />}
								title={Data.introTitle}
								text={Data.introText} >
							</TextCenter>

							{ Data.components.map((component, index) => {
								switch (component.itemType) {
									case '30_50_text_right':
										return (
											<FiftyFifty
												key={index}
												classes="fifty-fifty-text-small yo"
												title={component.title}
												text={component.text}
												image={component.image.url} />
										);

									case '30_50_text_left':
										return (
											<FiftyFifty
												key={index}
												parallaxLayerBack={ <FiftyFiftyShapes.BackLayer1 />}
												classes="fifty-fifty-content-left fifty-fifty-text-small fifty-fifty-margin-medium"
												title={component.title}
												text={component.text}
												image={component.image.url} />
										);
									case '50_50_text_right':
										return (
											<FiftyFifty
												key={index}
												noshadow
												parallaxLayerBack={ <FiftyFiftyShapes.BackLayer2 /> }
												title={component.title}
												text={component.text}
												image={component.image.url} />
										);
									case 'image_combo':
										return (
											<ImageCombo
												key={index}
												parallaxLayerFront={<ImageComboShapes.FrontLayer2 /> }
												classes={ component.textTitle ? 'image-combo-text': ''} >

												{ component.textTitle &&
													<TextCard
														title={component.textTitle}
														text={component.textContent} />
												}

												<FullWidthImage image={component.image.url} />

												{ component.quoteAuthorTitle &&
													<QuoteBlock
														color="blue"
														quote={component.quote}
														citeName={component.quoteAuthorName}
														citeTitle={component.quoteAuthorTitle}
														citeImage={component.quoteAuthorImage.url} />
												}
											</ImageCombo>
										);
									case 'collage':
										return (
											<Collage
												key={index}
												parallaxLayerFront={<CollageShapes.FrontLayer1 />}
												parallaxLayerBack={<CollageShapes.BackLayer1 />}
												title={component.title}
												text={component.text}
												imageMedium={component.imageBig.url}
												imageSmall={component.imageSmall.url} />
										);
									case 'full_width_image':
										return (
											<FullWidthImage
												key={index}
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

												<LogoList logos={component.logos} />
											</div>
										);
								}
							})}

							<Contact
								parallaxLayerFront={<ContactShapes.FrontLayer1 />}
								title="Where will your journey lead us"
								button="Get in touch" />

							<ReadMore
								highlight={{
									"image": "static/images/img-vbh.jpg",
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
	}
}

export default Case;
