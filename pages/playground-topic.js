import "isomorphic-fetch";
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import TextCenter from '../components/text-center/text-center';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverview from '../components/update-overview/update-overview';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';
import cookie from '../components/_helpers/cookie';

const topicOverview = ({Data, fontsLoaded, fullUrl}) => {
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
						<TextCenter text={Data.introText} />
						<UpdateOverview>
						{	Data.updateExtracts.map((item, index) => (
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
					<Contact
						title={'Are you also this curious?'}
						button={'See all opportunites'} >
						<ContactShapes.variation1Front position="front" />
					</Contact>
				</article>
				<Footer
					callToActionLabel={Data.footer.callToActionLabel}
					callToActionUrl={Data.footer.callToActionUrl} />
			</main>
		</Layout>
	);
};

topicOverview.getInitialProps = async ({req, query, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const res = await fetch(`${baseUrl}/api/playground-topic/${query.slug}`);
	const json = await res.json();

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data: json, fontsLoaded, fullUrl};
};


export default topicOverview;
