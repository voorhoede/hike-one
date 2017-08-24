import React from 'react';

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

import scrollToElement from '../components/_helpers/scrollToElement';
let scrollToTargetClass = 'js-scroll-to-target';

const workspace = {
	overlay: true,
	galleryTitle: 'Our work space',
	galleryItems: [
		{
			title: 'AMS',
			url:'../static/images/office_amsterdam.jpg'
		},
		{
			title: 'RTM',
			url:'../static/images/header_home.jpg'
		},
		{
			title: 'EHV',
			url:'../static/images/img-team.jpg'
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
}

const listValues = {
	title: 'Our values',
	values: [
		'Do what you love',
		'Find a way',
		'Be open and honest',
		'Get things done'
	]
}

const Team = () => {
	return (
		<Layout title="Hike One - Team">
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
						Person={PeopleData}
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
							Person={PeopleData}
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


export default Team;
