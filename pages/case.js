import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';

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
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
