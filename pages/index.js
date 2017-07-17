import React from 'react';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import ButtonSecondaryLink from '../components/buttons/button-secondary/button-secondary-link';

class Home extends React.Component {
	render() {
		return (
			<Layout title="Hike One">
				<Header/>
				<main className="container main js-main">
					<article className="article article-index">
						<ButtonSecondaryLink value="StyleGuide" href="/style-guide"/>
						<ButtonSecondaryLink value="Case" href="/case"/>
						<ButtonSecondaryLink value="Home" href="/home"/>
						<ButtonSecondaryLink value="Services" href="/services"/>
					</article>
				</main>
			</Layout>
		);
	}
}

export default Home;
