import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';

import FullWidthImage from '../components/full-width-image/full-width-image';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">
				<Header />
                <FullWidthImage image="static/images/team-copy-3-2.jpg" />
				<h1>Case</h1>
				<p>This is the Case page.</p>
				<Link href="/"><a href="/">Homepage</a></Link>
			</Layout>
		);
	}
}

export default Case;
