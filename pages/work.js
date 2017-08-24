import Link from 'next/link';
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from '../components/page-header/page-header-shapes';
import Footer from '../components/footer/footer';
import scrollToElement from '../components/_helpers/scrollToElement';

import cases from '../data/current/cases.json';
import data from '../data/current/work.json';

const work = () => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Case">
			<main className="main js-main">
				<MenuBar />
				<article className="article work">
					<PageHeader
						onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
						title={data.title}
						subtitle={data.headerSubtitle}
						heroImage={data.headerImage.url}>
						<PageHeaderShapes.variation2Front position="front"/>
						<PageHeaderShapes.variation1Back position="back"/>
					</PageHeader>

					<section className={`work-intro container ${scrollToTargetClass}`}>
						<ul className="work-intro-list list-no-style list-custom">
						{ cases.map((item, index) => (
							<li key={index} className="list-custom-item">
								<Link href={`/case?slug=${item.slug}`} as={`/case/${item.slug}`}>
									<a>Case: {item.title}</a>
								</Link>
							</li>
						))}
						</ul>
					</section>

				</article>
				<Footer/>
			</main>
		</Layout>
	);
};

export default work;
