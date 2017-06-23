import React from 'react';
import Link from 'next/link'

import Header       from '../components/header/header';
import Layout       from '../components/layout/layout';
import StyleGuide   from '../components/style-guide/style-guide'

class Home extends React.Component {
	render() {
		return (
			<Layout title="Style Guide | Hike One">
                <Header />
				<StyleGuide />
			</Layout>
		);
	}
}

export default Home;
