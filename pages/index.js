import React from 'react';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import ButtonSecondary from '../components/buttons/button-secondary/button-secondary';

class Home extends React.Component {
	render() {
		return (
			<Layout title="Hike One">
				<Header/>
				<main className="container main js-main">
					<ButtonSecondary value="StyleGuide" href="/style-guide"/>
				</main>
			</Layout>
		);
	}
}

export default Home;
