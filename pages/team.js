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

import Data from '../data/current/team.json';
import TeamImage2_1Data from '../data/current/teamImages21.json';
import TeamImage3_4Data from '../data/current/teamImages34.json';
import PeopleData from '../data/current/people.json';

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

const listValues = {
	title: 'Our values',
	values: [
		'Do what you love',
		'Find a way',
		'Be open and honest',
		'Get things done'
	]
}

const Team = ({fontsLoaded}) => {
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
							TeamImage3_4={TeamImage3_4Data}
							Person1={people[1]}
							Person2={people[2]}
							Person3={people[3]}
							listValues={listValues}>
							<ImageCompositionLargeShapes.variation1Front position="front"/>
							<ImageCompositionLargeShapes.variation1Back position="back"/>
					</ImageCompositionLarge>

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

Team.getInitialProps = async ({req}) => {
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {fontsLoaded};
};


export default Team;
