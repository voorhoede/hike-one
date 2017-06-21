import React from 'react';
import Link from 'next/link'

import Header from '../components/header/header';

class Case extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<h1>Case</h1>
				<p>This is the Case page.</p>

				<Link href="/"><a href="/">Homepage</a></Link>
			</div>
		);
	}
}

export default Case;
