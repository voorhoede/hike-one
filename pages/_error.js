import React from 'react'

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';

const Error = ({statusCode, fontsLoaded}) =>  (
	<Layout title="Hike One - Home" fontsLoaded={fontsLoaded}>
		<main className="main js-main" >
			<MenuBar color="black" />
			<article className="article article-error" style={{height: '100vh'}}>
				<TextCenter
					title={statusCode == '404'
						? `This page is not here`
						: 'Whoops, something went wrong'}
					text={statusCode == '404'
						? 'We lost the page! Don′t worry we know the way ;) Check out <a href="/team">who we are</a> and <a href="/work">what we do</a>'
						: 'Don′t worry we′ll be back as soon as we can. In the mean time, feel free to call <a href="tel:+31202044577">+31 20 204 45 77</a> or send us a message on <a href="mailto:hello@hike.one">hello@hike.one</a>'} >
					<TextCenterShapes.variation3Back position="back" />
					<TextCenterShapes.variation4Front position="front" />
				</TextCenter>
			</article>
			<Footer
				callToActionLabel="Up for a new challenge yourself? Join us!"
				callToActionUrl="http://werkenbij.unitid.nl"
				disableParallax={true} />
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
