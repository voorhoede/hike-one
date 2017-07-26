import React from 'react';

import Header       from '../components/menu-bar/menu-bar';
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
