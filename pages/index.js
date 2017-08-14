import React from 'react';

import Header from '../components/menu-bar/menu-bar';
import Layout from '../components/layout/layout';
import ButtonPrimaryLink from '../components/buttons/button-primary/button-primary-link';

const Home = () => (
	<Layout title="Hike One">
		<Header/>
		<main className="container main js-main">
			<article className="article article-index">
				<ButtonPrimaryLink href="/work" icon="arrowRight">work</ButtonPrimaryLink>
				<ButtonPrimaryLink href="/home" icon="arrowRight">Home</ButtonPrimaryLink>
				<ButtonPrimaryLink href="/services" icon="arrowRight">Services</ButtonPrimaryLink>
				<ButtonPrimaryLink href="/team" icon="arrowRight">Team</ButtonPrimaryLink>
			</article>
		</main>
	</Layout>
);

export default Home;
