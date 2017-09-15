import React from 'react'

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';
import TextCenter from '../components/text-center/text-center';

// inline style is temp

const Error = ({statusCode, fontsLoaded}) =>  (
	<Layout title="Hike One - Home" fontsLoaded={fontsLoaded}>
		<main className="main js-main" >
			<MenuBar color="black" />
			<article className="article" style={{height: '100vh'}}>
				<TextCenter
					title="Oops something went wrong"
					text={statusCode
						? `An error ${statusCode} occurred on server`
						: 'An error occurred on client'} />
			</article>
			<Footer />
		</main>
	</Layout>
);

Error.getInitialProps = async ({ res, req, jsonPageRes }) => {
	const statusCode = res
		? res.statusCode
		: jsonPageRes ? jsonPageRes.status : null
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { statusCode, fontsLoaded };
};

export default Error;
