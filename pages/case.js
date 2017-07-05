import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CaseTextCenter from '../components/case-text-center/case-text-center';

import CaseTextContainer from '../components/case-text-container/case-text-container';
import CaseText from '../components/case-text/case-text';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">
				<main className="main js-main">
					<Header />
					<CaseTextCenter />
					<CaseTextContainer>
						<CaseText title="Truly global" text="We created a real smart system, that could predict the most used presets in languages at certain times of the day. This helped passengers in quickly selecting a language." />
						<CaseText className="first-on-mobile" image="static/images/drop_fly1.jpg" />
					</CaseTextContainer>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
