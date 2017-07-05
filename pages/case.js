import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CaseTextCenter from '../components/case-text-center/case-text-center';

import FiftyFifty from '../components/50-50/50-50';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">
				<main className="main js-main">
					<Header />
					<CaseTextCenter />
                    <FiftyFifty className="desktop-image-last"
                    title="Truly global"
                    text="We created a real smart system, that could predict the most used presets in languages at certain times of the day. This helped passengers in quickly selecting a language."
                    image="static/images/drop_fly1.jpg" />
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
