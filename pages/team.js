import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from '../components/page-header/page-header-shapes';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';
import ImageCompositionSmall from '../components/image-composition-small/image-composition-small';
import * as ImageCompositionSmallShapes from '../components/image-composition-small/image-composition-small-shapes';
import Collage from '../components/collage/collage';
import TextCenter from '../components/text-center/text-center';
import FiftyFifty from '../components/50-50/50-50';
import StatisticsBlock from '../components/statistics-block/statistics-block';
import ImageGallery from '../components/image-gallery/image-gallery';
import ImageCombo from '../components/image-combo/image-combo';
import TeamImage from '../components/team-image/team-image';

import cookie from '../components/_helpers/cookie';
import scrollToElement from '../components/_helpers/scrollToElement';
let scrollToTargetClass = 'js-scroll-to-target';

const Team = ({ Data, fontsLoaded }) => {
	return (
		<Layout title="Hike One - Team"
				fontsLoaded={fontsLoaded}
				seo={Data.seo}
				keywords={Data.keywords}>
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

					<Collage
						title={Data.collage.title}
						text={Data.collage.text}
						imageMedium={Data.collage.imageBig.url}
						imageSmall={Data.collage.imageSmall.url}>
					</Collage>

					<ImageCombo>
						<ImageGallery
							title={Data.galleryTitle}
							items={[
								{
									title: 'AMS',
									url: Data.amsterdamOffice.url
								},
								{
									title: 'RTM',
									url: Data.rotterdamOffice.url
								},
								{
									title: 'EHV',
									url: Data.eindhovenOffice.url
								}
							]}/>
						<StatisticsBlock
							color='blue'
							alignment='text-block-right'
							summary={{
								label: Data.statistics.summaryLabel,
								count: Data.statistics.summaryCount
							}}
							groups={[
								{
									label: Data.statistics.group1Label,
									count: Data.statistics.group1Count
								},{
									label: Data.statistics.group2Label,
									count: Data.statistics.group2Count
								},{
									label: Data.statistics.group3Label,
									count: Data.statistics.group3Count
								}
							]}
							link={{
								target: Data.statistics.linkTarget,
								label: Data.statistics.linkLabel,
							}} />
					</ImageCombo>

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
							case 'text_center':
								return (
									<TextCenter
										key={index}
										title={component.title}
										text={component.text} />
								);
						}
					})}

					{ Data.imageComposition &&
						<ImageCompositionSmall
							classes={scrollToTargetClass}
							image21={Data.imageComposition.teamImage21}
							image34={Data.imageComposition.teamImage34Large}
							image34Small={Data.imageComposition.teamImage34Small} >
							<ImageCompositionSmallShapes.variation1Front position="front"/>
							<ImageCompositionSmallShapes.variation1Back position="back"/>
						</ImageCompositionSmall>
					}

					{
						Data.teamImage916 &&
						<TeamImage
							title={Data.teamImage916.title}
							image={Data.teamImage916.photo.url}
						/>
					}

					<Contact
						title={Data.contact.title}
						button={Data.contact.button}
						link={Data.contact.externalLink}
						target='_blank' >
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

Team.getInitialProps = async ({req}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const Data = await fetch(`${baseUrl}/api/team`).then(res => res.json());
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data, fontsLoaded };
};


export default Team;
