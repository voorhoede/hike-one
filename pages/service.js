import React from 'react';
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';
import PageHeaderSmall from '../components/page-header-small/page-header-small';
import * as PageHeaderSmallShapes from '../components/page-header-small/page-header-small-shapes';
import TabSelector from '../components/tab-selector/tab-selector';

import "isomorphic-fetch";

const productDesignData = {
	title: 'New product design',
	color: 'blue',
	target: '#newproductdesign'
}

const designData = {
	title: 'UX / UI Design',
	color: 'green',
	target: '#design'
}

const trainingData = {
	title: 'Training & Academy',
	color: 'purple',
	target: '#training'
}

const Service = ({Data}) => (
	<Layout title="Hike One - Case">
		<main className="main js-main">
			<MenuBar/>
			<article className="article">
				<PageHeaderSmall
					title="Our Services">
					<PageHeaderSmallShapes.variation2Front position="front"/>
					<PageHeaderSmallShapes.variation1Back position="back"/>
				</PageHeaderSmall>
				<TabSelector 
					product={productDesignData}
					design={designData}
					training={trainingData}/>
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

// get service data on server
Service.getInitialProps = async ({req, query}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(`${baseUrl}/api/services/${query.slug}`);
	const json = await res.json();
	return { Data: json };
};

export default Service;
