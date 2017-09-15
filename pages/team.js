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

const workspace = {
	overlay: true,
	galleryTitle: 'Our work space',
	galleryItems: [
		{
			title: 'AMS',
			url:'../static/images/office-amsterdam.jpg'
		},
		{
			title: 'RTM',
			url:'../static/images/office-rotterdam.jpg'
		},
		{
			title: 'EHV',
			url:'../static/images/office-eindhoven.jpg'
		}
	],
	statisticsSingle: {
		title:'Digital Fanatics',
		amount: 62
	},
	statisticsCombination: [
		{
			title:'Digital Designer',
			amount: 53
		},{
			title:'Project Mangers',
			amount: 8
		},{
			title:'Super Heroes',
			amount: 4
		}
	],
	workspaceOpenings: {
		title: 'See job openings',
		target: '#jobopenings'
	}
};

const people = [
	{
		role: 'Projectmanager',
		name: 'Rozanne Verhoeven',
		photo: {
			url: '../static/images/rozanne.jpg'
		}
	},{
		role: 'Interaction Designer',
		name: 'Myrthe Geldof',
		photo: {
			url: '../static/images/myrthe.jpg'
		}
	},{
		role: 'Interaction Designer',
		name: 'Steven van Asselt',
		photo: {
			url: '../static/images/steven.jpg'
		}
	},{
		role: 'Partner',
		name: 'Matthijs Collard',
		photo: {
			url: '../static/images/matthijs.jpg'
		}
	},
];

const Team = ({ Data, fontsLoaded }) => {
	return (
		<Layout title="Hike One - Team" fontsLoaded={fontsLoaded}>
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
						<ImageGallery title={Data.galleryTitle} items={workspace.galleryItems} />
						<StatisticsBlock
							color='blue'
							alignment='text-block-right'
							statisticsSingle={workspace.statisticsSingle}
							statisticsCombination={workspace.statisticsCombination}
							jobOpenings={workspace.workspaceOpenings} />
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
						button={Data.contact.button} >
						<ContactShapes.variation1Front position="front" />
					</Contact>
				</article>
				<Footer />
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
