import React from 'react';
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import "isomorphic-fetch";

const Update = ({Data}) => (
	<Layout title={`Hike One - ${Data.title}`}>
		<main className="main js-main">
			<MenuBar/>
			<article className="article">
				<h1> { Data.title } </h1>
			</article>
			<Footer />
		</main>
	</Layout>
);

// get update data on server
Update.getInitialProps = async ({req, query}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(`${baseUrl}/api/updates/${query.slug}`);
	const json = await res.json();
	return { Data: json };
};

export default Update;
