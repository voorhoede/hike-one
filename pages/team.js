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
import ImageCompositionLarge from '../components/image-composition-large/image-composition-large';
import * as ImageCompositionLargeShapes from '../components/image-composition-large/image-composition-large-shapes';
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

const TeamImage3_4DummyData = {
	title: 'Crafting our company bike',
	photo: {
		url: '../static/images/tinkering.jpg'
	}
};

const TeamImage9_16DummyData = {
	title: 'Crafting our company bike',
	photo: {
		url: 'https://www.datocms-assets.com/2625/1503415605-header-grafity-kopie1491834535inline.jpg?'
	}
};

const listValues = {
	title: 'Our values',
	values: [
		'Do what you love',
		'Find a way',
		'Be open and honest',
		'Get things done'
	]
}

const Team = ({ Data, TeamImage2_1Data, TeamImage3_4Data, PeopleData, fontsLoaded, TeamImage9_16Data }) => {
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

					<ImageCompositionSmall
						classes={scrollToTargetClass}
						Person={people[0]}
						TeamImage2_1={TeamImage2_1Data}
						TeamImage3_4={TeamImage3_4Data}>
						<ImageCompositionSmallShapes.variation1Front position="front"/>
						<ImageCompositionSmallShapes.variation1Back position="back"/>
					</ImageCompositionSmall>

					<ImageCombo>
						<ImageGallery title={workspace.galleryTitle} items={workspace.galleryItems} />
						<StatisticsBlock
							color='blue'
							alignment='text-block-right'
							statisticsSingle={workspace.statisticsSingle}
							statisticsCombination={workspace.statisticsCombination}
							jobOpenings={workspace.workspaceOpenings} />
					</ImageCombo>

					<ImageCompositionLarge
							TeamImage3_4={TeamImage3_4DummyData}
							Person1={people[1]}
							Person2={people[2]}
							Person3={people[3]}
							listValues={listValues}>
							<ImageCompositionLargeShapes.variation1Front position="front"/>
							<ImageCompositionLargeShapes.variation1Back position="back"/>
					</ImageCompositionLarge>
					
					<TeamImage
						image={TeamImage9_16DummyData.photo.url}
						title={TeamImage9_16DummyData.title}> 
					</TeamImage>

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
	const fetchJson = (model) => fetch(`${baseUrl}/api/${model}`).then(res => res.json());
	const fetchAll = (models) => Promise.all(models.map(fetchJson));
	const [Data, TeamImage2_1Data, TeamImage3_4Data, PeopleData] = await fetchAll([
		'team',
		'teamImages21',
		'teamImages34',
		'people'
	]);
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data, TeamImage2_1Data, TeamImage3_4Data, PeopleData, fontsLoaded };
};


export default Team;
