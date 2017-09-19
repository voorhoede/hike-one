import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import OfficeOverview from '../components/office-overview/office-overview';
import OfficeCard from '../components/office-card/office-card';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import Footer from '../components/footer/footer';

import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from  '../components/page-header/page-header-shapes';

import scrollToElement from '../components/_helpers/scrollToElement';
import cookie from '../components/_helpers/cookie';

const Contact = ({Data, fontsLoaded}) => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Contact"
				fontsLoaded={fontsLoaded}
				seo={Data.seo}
				keywords={Data.keywords}>
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

					<TextCenter
						classes={`text-center-font-large ${scrollToTargetClass}`}
						text={Data.content}>
						<TextCenterShapes.variation2Back position="back" />
					</TextCenter>

					<OfficeOverview>
						{ Data.office.map((item, index) => (
							<OfficeCard
								key={index}
								index={index}
								location={item.location}
								address={item.address}
								postcode={item.postcode}
								city={item.city}
								country={item.country}
								locationUrl={item.locationUrl}
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
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const Data = await fetch(`${baseUrl}/api/contact`).then(res => res.json());
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {Data, fontsLoaded};
};

export default Contact;
