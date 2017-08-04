import React from 'react';

import Header from '../components/menu-bar/menu-bar';
import Layout from '../components/layout/layout';
import ButtonSecondaryLink from '../components/buttons/button-secondary/button-secondary-link';

const Home = () => (
	<Layout title="Hike One">
		<Header/>
		<main className="container main js-main">
			<article className="article article-index">
				<ButtonSecondaryLink href="/work">work</ButtonSecondaryLink>
				<ButtonSecondaryLink href="/home">Home</ButtonSecondaryLink>
				<ButtonSecondaryLink href="/services">Services</ButtonSecondaryLink>
			</article>
		</main>
	</Layout>
);

export default Home;
