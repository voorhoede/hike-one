import "isomorphic-fetch";
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverview from '../components/update-overview/update-overview';
import cookie from '../components/_helpers/cookie';
import UpdatesExtractLarge from "../components/updates-extract-large/updates-extract-large";

const updates = ({Data, updatesData, fontsLoaded, fullUrl}) => {
	return (
		<Layout title="Hike One - Updates"
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
					<div className={`page-scrolling-content-small`}>
						<UpdateOverview>
							<UpdatesExtractLarge highlights={Data.highlights} mustRead={Data.mustRead} index />
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
									color={item.themeColor.hex}
									external={item.isExternalLink}/>
							))}
						</UpdateOverview>
					</div>
				</article>
				<Footer
					callToActionLabel={Data.footer.callToActionLabel}
					callToActionUrl={Data.footer.callToActionUrl} />
			</main>
		</Layout>
	);
};

updates.getInitialProps = async ({req, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const fetchJson = (model) => fetch(`${baseUrl}/api/${model}`).then(res => res.json());
	const fetchAll = (models) => Promise.all(models.map(fetchJson));
	const [ Data, updatesData ] = await fetchAll(['update-overview', 'update-extracts']);
	updatesData.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data, updatesData, fontsLoaded, fullUrl};
};


export default updates;
