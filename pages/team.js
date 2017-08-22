import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from '../components/page-header/page-header-shapes';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';
import ImageComposition from '../components/image-composition/image-composition';
import * as ImageCompositionShapes from '../components/image-composition/image-composition-shapes';
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
	workspaceTitle: 'Our work space',
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

					<div className={`${scrollToTargetClass}`}>
						<ImageComposition
							Person={PeopleData}
							TeamImage2_1={TeamImage2_1Data}
							TeamImage3_4={TeamImage3_4Data}>
							<ImageCompositionShapes.variation1Front position="front"/>
							<ImageCompositionShapes.variation1Back position="back"/>
						</ImageComposition>
					</div>

					<ImageCombo
						classes={ workspace.workspaceTitle ? 'image-combo-text': ''} >
						<ImageGallery items={workspace.galleryItems} >
						</ImageGallery>
						<StatisticsBlock
							color='blue'
							alignment='text-block-right'
							statisticsSingle={workspace.statisticsSingle}
							statisticsCombination={workspace.statisticsCombination}
							jobOpenings={workspace.workspaceOpenings} />
					</ImageCombo>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};


export default Team;
