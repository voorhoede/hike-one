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
import QuoteBlock from '../components/quote-block/quote-block';
import ImageGallery from '../components/image-gallery/image-gallery';
import ImageCombo from '../components/image-combo/image-combo';

import Data from '../data/current/team.json';
import scrollToElement from '../components/_helpers/scrollToElement';

const workspace = {
	overlay: true,
	workspaceTitle: 'Our work space',
	workspaceImages: [
		{
			name: 'amsterdam',
			url:'../static/images/office_amsterdam.jpg'
		},
		{
			name: 'rotterdam',
			url:'../static/images/header_home.jpg'
		},
		{
			name: 'eindhoven',
			url:'../static/images/img-team.jpg'
		}
	],
	workspaceLocations: [
		{
			title: 'AMS',
			target: '#AMS'
		},{
			title: 'RTM',
			target: '#RTM'
		},{
			title: 'EHV',
			target: '#EHV'
		}
	],
	workspaceStatistics: [
		{
			title:'amountFanatics',
			amount: 62
		},{
			title:'digitalDesigner',
			amount: 53
		},{
			title:'projectMangers',
			amount: 8
		},{
			title:'superHeroes',
			amount: 4
		},
	],
	workspaceOpenings: {
		title: 'See job openings',
		target: '#jobopenings'
	}
}


const Team = () => {
	let scrollToTargetClass = 'js-scroll-to-target';
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
					
					<ImageComposition> 
						<ImageCompositionShapes.variation1Front position="front"/>
						<ImageCompositionShapes.variation1Back position="back"/>
					</ImageComposition>
					
					<ImageCombo
						classes={ workspace.workspaceTitle ? 'image-combo-text': ''} >
						<ImageGallery 
							images={workspace.workspaceImages}
							title={workspace.workspaceTitle}
							links={workspace.workspaceLocations}>
						</ImageGallery>
						<QuoteBlock
							alignment='quote-block-right' 
							text={workspace.workspaceStatistics}
							openings={workspace.workspaceOpenings} />
					</ImageCombo>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};


export default Team;
