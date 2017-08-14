import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from '../components/page-header/page-header-shapes';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import ImageComposition from '../components/image-composition/image-composition';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import Data from '../data/current/team.json';
import scrollToElement from '../components/_helpers/scrollToElement';

const images = [
	{
		url: "../../static/images/453x808.png"
	},
	{ 
		url: "../../static/images/452x600.png",
		alignRight: true
	},
	{ 	
		url: "../../static/images/329x441.png",
		alignRight: true
	}
]

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
					
					<ImageComposition images={images} />
				</article>
				<Footer />
			</main>
		</Layout>
	);
};


export default Team;
