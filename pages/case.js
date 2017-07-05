import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';
import FiftyFifty from '../components/50-50/50-50';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">
				<main className="main js-main">
					<Header />
					<article className="article-full-width">
						<CaseIntro
							title="Gone in 60 seconds"
							subtitle="SITA asked us to make it astonishingly easy for passengers all over the world to check in their luggage within 1 minute."
							image="http://via.placeholder.com/1000x500" />
						<CaseTextCenter />
						<FiftyFifty className="desktop-image-last"
						title="Truly global"
						text="We created a real smart system, that could predict the most used presets in languages at certain times of the day. This helped passengers in quickly selecting a language."
						image="static/images/drop_fly1.jpg" />
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
