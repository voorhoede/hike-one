import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import OfficeOverview from '../components/office-overview/office-overview';
import OfficeCard from '../components/office-card/office-card';
import Footer from '../components/footer/footer';

import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from  '../components/page-header/page-header-shapes';

import Data from '../data/current/contact.json';
import scrollToElement from '../components/_helpers/scrollToElement';
import cookie from '../components/_helpers/cookie';

const Contact = ({fontsLoaded}) => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Contact" fontsLoaded={fontsLoaded}>
			<main className="main js-main" >
				<MenuBar color="black" />
				<article className="article">
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						title={Data.headerTitle}
						subtitle={Data.headerSubtitle}
						heroImage={Data.headerImage.url} >
						<PageHeaderShapes.variation1Front position="front" />
						<PageHeaderShapes.variation1Back position="back" />
					</PageHeader>

					<OfficeOverview classes={scrollToTargetClass}>
						{ Data.office.map((item, index) => (
							<OfficeCard
								key={index}
								location={item.location}
								address={item.address}
								postcode={item.postcode}
								city={item.city}
								imageUrl={item.image.url} />
						))}
					</OfficeOverview>
				</article>

				<Footer />
			</main>
		</Layout>
	);
};

Contact.getInitialProps = async ({req}) => {
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {fontsLoaded};
};

export default Contact;
