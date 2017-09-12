import React from 'react';

const Home = ({fontsLoaded}) => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<div>.</div>
	);
};

Home.getInitialProps = async ({req}) => {
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {fontsLoaded};
};

export default Home;
