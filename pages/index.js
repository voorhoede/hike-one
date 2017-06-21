import React from 'react';
import Link from 'next/link'

import Header from '../components/header/header';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<h1>Home</h1>
				<p>This is the Home component.</p>

				<Link href="/services">Services page</Link>
			</div>
		);
	}
}

export default Home;
