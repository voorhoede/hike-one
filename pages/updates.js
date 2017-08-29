import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import UpdatesHeader from '../components/updates-header/updates-header';
import * as UpdatesHeaderShapes from '../components/updates-header/updates-header-shapes';
import data from '../data/current/update.json';
import Data from '../data/current/home.json';
import UpdatesExtract from '../components/updates-extract/updates-extract';
import UpdatesOverview from '../components/updates-overview/updates-overview';

const updates = () => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Updates">
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<UpdatesHeader 
						title={data.updatePageTitle}>
						<UpdatesHeaderShapes.variation2Front position="front"/>
						<UpdatesHeaderShapes.variation1Back position="back"/>
					</UpdatesHeader>
					<UpdatesOverview>
						<UpdatesExtract 
							title="yo" 
							date="2017-07-07" 
							name="Nick Hogedoorn" 
							extractImage={Data.caseExtract.image.url}/>
					</UpdatesOverview>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};

export default updates;
