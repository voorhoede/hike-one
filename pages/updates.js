import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import UpdatesHeader from '../components/updates-header/updates-header';

import data from '../data/current/update.json';

const updates = () => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Updates">
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<UpdatesHeader 
						title={data.updatePageTitle}>
					</UpdatesHeader>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};

export default updates;
