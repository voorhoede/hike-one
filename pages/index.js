import React from 'react';

import Header from '../components/menu-bar/menu-bar';
import Layout from '../components/layout/layout';
import ButtonSecondaryLink from '../components/buttons/button-secondary/button-secondary-link';

const Home = () => (
	<Layout title="Hike One">
		<Header/>
		<main className="container main js-main">
			<article className="article article-index">
				<ButtonSecondaryLink href="/work" classes="btn-red">work</ButtonSecondaryLink>
				<ButtonSecondaryLink href="/home" classes="btn-red">Home</ButtonSecondaryLink>
				<ButtonSecondaryLink href="/services" classes="btn-red">Services</ButtonSecondaryLink>
			</article>
		</main>
	</Layout>
);

export default Home;
