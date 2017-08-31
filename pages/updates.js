import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import UpdatesHeader from '../components/updates-header/updates-header';
import * as UpdatesHeaderShapes from '../components/updates-header/updates-header-shapes';
import data from '../data/current/update-overview.json';
import updatesData from '../data/current/updates.json';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverview from '../components/update-overview/update-overview';

const updates = () => {
	return (
		<Layout title="Hike One - Updates">
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<UpdatesHeader
						title={data.title}>
						<UpdatesHeaderShapes.variation2Front position="front"/>
						<UpdatesHeaderShapes.variation1Back position="back"/>
					</UpdatesHeader>
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
								color={item.themeColor.hex} />
						))}
					</UpdateOverview>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};

export default updates;
