import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import HomeHero from '../components/home-hero/home-hero';
import ReadMore from '../components/read-more/read-more';
import Contact from '../components/contact/contact';

import Data from '../dummy-data/home/home.json';

class Home extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Home">
				<main className="main js-main">
					<Header color="black" />
					<article className="article-full-width">
						<HomeHero
								title={Data.heroHeading} 
								subtitle={Data.heroSubheading}
								heroImage={Data.heroImage} />
						<Contact
								title={Data.contactTitle}
								button={Data.contactButton} />
						<ReadMore
							highlight={Data.readMore.highlight}
							links={Data.readMore.links} />
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Home;
