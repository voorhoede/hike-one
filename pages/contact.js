import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';

import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from  '../components/page-header/page-header-shapes';

const Contact = ({Data, fontsLoaded}) => {
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
