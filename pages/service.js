import React from 'react';
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';
import PageHeaderSmall from '../components/page-header-small/page-header-small';
import * as PageHeaderSmallShapes from '../components/page-header-small/page-header-small-shapes';
import TabSelector from '../components/tab-selector/tab-selector';
import Data from '../data/current/home.json';

import "isomorphic-fetch";

const items = [
	{
		shape: 'diamnond',
		title: 'New product design',
		target: '#newproductdesign'
	},
	{
		shape: 'doubleDiamond',
		title: 'UX / UI Design',
		target: '#uxuidesign'
	},
	{
		shape: 'triangle',
		title: 'Training & Academy',
		target: '#trainingandacademy'
	}
]

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
				<TabSelector items={items} />
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
