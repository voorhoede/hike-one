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

import * as ImageCompositionShapes from '../components/image-composition/image-composition-shapes';

import Data from '../data/current/team.json';

import scrollToElement from '../components/_helpers/scrollToElement';

import TeamImage2_1 from '../components/team-image-2-1/team-image-2-1';
import TeamImage2_1Data from '../data/current/teamImages21.json';

import TeamImage3_4 from '../components/team-image-3-4/team-image-3-4';
import TeamImage3_4Data from '../data/current/teamImages34.json';

import Person from '../components/person/person';
import PeopleData from '../data/current/people.json';

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
					
					<div className="image-composition">
						<TeamImage2_1 image={TeamImage2_1Data}  />
						<TeamImage3_4 image={TeamImage3_4Data}  />
						<Person image={PeopleData}  />	
					</div>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};


export default Team;
