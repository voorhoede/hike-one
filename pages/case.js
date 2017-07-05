import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import CaseTextCenter from '../components/case-text-center/case-text-center';

import CaseTextContainer from '../components/case-text-container/case-text-container';
import CaseText from '../components/case-text/case-text';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">
				<Header />
                <CaseTextContainer>
					<CaseTextCenter />
                    <CaseText title="Truly global" text="We created a real smart system, that could predict the most used presets in languages at certain times of the day. This helped passengers in quickly selecting a language." />
                    <CaseText className="first-on-mobile" image="static/images/drop_fly1.jpg" />
                </CaseTextContainer>
				<h1>Case</h1>
				<p>This is the Case page.</p>
				<Link href="/"><a href="/">Homepage</a></Link>
			</Layout>
		);
	}
}

export default Case;
