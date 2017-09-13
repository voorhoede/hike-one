import "isomorphic-fetch";
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import * as PageHeaderShapes from '../components/page-header/page-header-shapes';
import CaseExtractSmall from '../components/case-extract-small/case-extract-small';
import Footer from '../components/footer/footer';
import WorkOverview from '../components/work-overview/work-overview';
import LogoCarousel from '../components/logo-carousel/logo-carousel';

import scrollToElement from '../components/_helpers/scrollToElement';
import cookie from '../components/_helpers/cookie';
import cases from '../data/current/cases.json';
import data from '../data/current/work.json';

const work = ({fontsLoaded}) => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Case" fontsLoaded={fontsLoaded} >
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

					<WorkOverview classes={scrollToTargetClass}>
						{ cases.map((item, index) => (
							<CaseExtractSmall
								key={index}
								title={item.title}
								subtitle={item.headerSubtitle}
								image={item.headerBackgroundImage}
								companyName={item.companyName}
								color={item.caseThemeColor.hex}
								slug={item.slug} />
						))}
					</WorkOverview>

					<LogoCarousel
						title={data.companiesTitle}
						companies={data.companies}
						animationSpeed={data.animationSpeed}/>
				</article>
				<Footer/>
			</main>
		</Layout>
	);
};

work.getInitialProps = async ({req}) => {
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {fontsLoaded};
};

export default work;
