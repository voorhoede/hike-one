import React from 'react';
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import "isomorphic-fetch";

const Service = ({Data}) => (
	<Layout title="Hike One - Case">
		<main className="main js-main">
			<MenuBar/>
			<article className="article">
				<h1>{Data.title}</h1>
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
