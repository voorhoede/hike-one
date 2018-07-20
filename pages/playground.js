import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';

import PageHeader from '../components/page-header/page-header';
import TextCenter from '../components/text-center/text-center';
import PlaygroundOverview from '../components/playground-overview/playground-overview';
import PlaygroundCard from '../components/playground-card/playground-card';

const Playground = ({Data, fontsLoaded, fullUrl}) => (
	<Layout title={`Hike One - ${Data.title}`}
			fontsLoaded={fontsLoaded}
			seo={Data.seo}
			url={fullUrl} >
		<main className="main js-main">
			<MenuBar color="white" />
			<article className="article">
				<PageHeader
					isSmall={true}
					title={Data.header.title}
					subtitle={Data.header.subtitle}
					image={Data.header.backgroundImage.url}/>
				<div className="page-scrolling-content-small">
					<TextCenter text={Data.introText} />
					<PlaygroundOverview title={Data.overviewTitle}>
						{ Data.categories.map((category, index) => (
							<PlaygroundCard
								key={index}
								category={category}
								index={index}
							/>
						))}
					</PlaygroundOverview>
				</div>
			</article>
			<Footer
				callToActionLabel={Data.footer.callToActionLabel}
				callToActionUrl={Data.footer.callToActionUrl} />
		</main>
	</Layout>
);

Playground.getInitialProps = async ({req, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const Data = await fetch(`${baseUrl}/api/playground`).then(res => res.json());
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');

	return {Data, fontsLoaded, fullUrl};
};

export default Playground;
