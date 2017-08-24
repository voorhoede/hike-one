import Link from 'next/link';
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from '../components/page-header/page-header-shapes';
import Footer from '../components/footer/footer';
import scrollToElement from '../components/_helpers/scrollToElement';
import CaseExtractSmall from '../components/case-extract-small/case-extract-small';
import * as CaseExtractSmallShapes from '../components/case-extract-small/case-extract-small-shapes';
import cases from '../data/current/cases.json';
import data from '../data/current/work.json';

const caseItem = {
	color: 'blue',
	companyName: 'Sita',
	title: 'Gone in 60 seconds',
	subtitle: 'Een update voor de grootste woning stie van Nederland',
	slug: 'gone-in-60-seconds',
	headerBackgroundImage: {
		url: 'https://www.datocms-assets.com/2625/1500551495-drop-fly-header.jpg?'
	}
}


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
					
					<div className="case-extract-small-container">
						<CaseExtractSmall item={caseItem}>
							<CaseExtractSmallShapes.variation1Front position="front"/>
						</CaseExtractSmall>
					</div>
				</article>
				<Footer/>
			</main>
		</Layout>
	);
};

export default work;
