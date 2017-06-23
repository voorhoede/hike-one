import React from 'react';
import Link from 'next/link'

import Header from '../components/header/header';
import Layout from '../components/layout/layout';

class Home extends React.Component {
	render() {
		return (
			<Layout title="Hike One">
				<Header/>
				<Link href="/style-guide"><a>Services page</a></Link>
			</Layout>
		);
	}
}

export default Home;
