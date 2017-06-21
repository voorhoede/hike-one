import React from 'react';
import Link from 'next/link'

import Header from '../components/header/header';
import Layout from '../components/layout/layout';

class Home extends React.Component {
	render() {
		return (
			<Layout title="Hike One">
				<Header/>
				<h1>Home</h1>
				<p>This is the Home component.</p>

				<Link href="/services">Services page</Link>
			</Layout>
		);
	}
}

export default Home;
