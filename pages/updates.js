import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';

import cases from '../data/current/cases.json';
import data from '../data/current/work.json';

const updates = () => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Updates">
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<h1>Updates</h1>
				</article>
				<Footer/>
			</main>
		</Layout>
	);
};

export default updates;
