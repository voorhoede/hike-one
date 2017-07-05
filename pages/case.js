import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import CaseTextCenter from '../components/case-text-center/case-text-center';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">
				<Header />
				<CaseTextCenter />
				<h1>Case</h1>
				<p>This is the Case page.</p>
				<Link href="/"><a href="/">Homepage</a></Link>
			</Layout>
		);
	}
}

export default Case;
