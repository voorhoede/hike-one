import "isomorphic-fetch";
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeaderSmall from '../components/page-header-small/page-header-small';
import * as PageHeaderSmallShapes from '../components/page-header-small/page-header-small-shapes';
import data from '../data/current/update-overview.json';
import updatesData from '../data/current/update-extracts.json';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverview from '../components/update-overview/update-overview';
import cookie from '../components/_helpers/cookie';

const updates = ({fontsLoaded}) => {
	return (
		<Layout title="Hike One - Updates" fontsLoaded={fontsLoaded}>
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<PageHeaderSmall
						title={data.title}>
						<PageHeaderSmallShapes.variation2Front position="front"/>
						<PageHeaderSmallShapes.variation1Back position="back"/>
					</PageHeaderSmall>
					<UpdateOverview>
						{ updatesData.map((item, index) => (
							<UpdateExtractSmall
								key={index}
								index={index}
								title={item.title}
								date={item.date}
								author={item.author.name}
								target={item.link}
								image={item.image.url}
								category={item.category.name}
								color={item.themeColor.hex} />
						))}
					</UpdateOverview>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};

updates.getInitialProps = async ({req}) => {
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {fontsLoaded};
};


export default updates;
