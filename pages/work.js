import "isomorphic-fetch";
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import CaseExtractSmall from '../components/case-extract-small/case-extract-small';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';
import Footer from '../components/footer/footer';
import WorkOverview from '../components/work-overview/work-overview';
import LogoCarousel from '../components/logo-carousel/logo-carousel';
import cookie from '../components/_helpers/cookie';
import getData from '../lib/get-data'

const work = ({cases, data, fontsLoaded, fullUrl}) => (
	<Layout title="Hike One - Case"
			fontsLoaded={fontsLoaded}
			seo={data.seo}
			url={fullUrl} >
		<main className="main js-main">
			<MenuBar color="white" />
			<article className="article work">
				<PageHeader
					isSmall={true}
					title={data.header.title}
					subtitle={data.header.subtitle}
					image={data.header.backgroundImage.url}/>

				<div className={`page-scrolling-content-small`}>

					<LogoCarousel
						title={data.logoCarousel.title}
						companies={data.logoCarousel.companies}
						animationSpeed={data.logoCarousel.animationSpeed}/>

					<WorkOverview>
						{ cases.map((item, index) => {
							if (item.showInOverview) {
								return (
									<CaseExtractSmall
										key={index}
										title={item.header.title}
										subtitle={item.header.subtitle}
										image={item.header.backgroundImage}
										companyName={item.companyName}
										color={item.caseThemeColor.hex}
										slug={item.slug} />
								);
							}
						})}
					</WorkOverview>
					<Contact
						title={data.contact.title}
						button={data.contact.button} >
						<ContactShapes.variation1Front position="front" />
					</Contact>
				</div>
			</article>
			<Footer
				callToActionLabel={data.footer.callToActionLabel}
				callToActionUrl={data.footer.callToActionUrl} />
		</main>
	</Layout>
);


work.getInitialProps = async ({req, res, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const fetchJson = (model) => getData(baseUrl, model, res)
	const fetchAll = (models) => Promise.all(models.map(fetchJson));
	const [ cases, data ] = await fetchAll(['cases', 'work']);
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { cases, data, fontsLoaded, fullUrl};
};

export default work;
