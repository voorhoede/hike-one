import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Analytics from '../components/analytics/analytics';
import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import UpdateOverview from '../components/update-overview/update-overview';
import Footer from '../components/footer/footer';

const Page = ({ updateOverview, allUpdateExtracts, footer }) => (
	<>
		<Head
			title={updateOverview.seo.title}
			description={updateOverview.seo.description}
			image={updateOverview.seo.image}
			twitterCard={updateOverview.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<PageHeader
				isSmall={true}
				title={updateOverview.header.title}
				subtitle={updateOverview.header.subtitle}
				image={updateOverview.header.backgroundImage.url}
			/>

			<main className="page-scrolling-content-small">
				<UpdateOverview
					data={updateOverview}
					updatesData={allUpdateExtracts}
					queryParam={updateOverview}
				/>
			</main>
		</div>

		<Footer form={footer.form} />

		<Analytics />
	</>
);

Page.getInitialProps = withCacheControl(({ query, req }) => {
	const graphqlQuery = `{
		updateOverview {
			seo {
				title
				description
				twitterCard
				image {
					url
					width
					height
				}
			}

			header {
				title
				subtitle
				backgroundImage {
					url
				}
			}

			mustRead {
				slug
				title
				link: externalLink
				authors { name }
			}

			highlights {
				id
				title
				topic
				slug
				createdAt
				link: externalLink

				authors { name }
				category { name }
				image { url }
				themeColor { hex }
			}
		}

		allUpdateExtracts(first: 99, orderBy: date_DESC) {
			id
			slug
			topic
			title
			createdAt
			date
			externalLink
			authors { name }
			category { name }
			image { url }
			themeColor { hex }
		}

		footer {
			form {
				title
				description
				listId
				button
				hasShadow
				extraInputFields {
					label
					inputType
					required
				}
			}
		}
	}`;

	return fetchContent({ graphqlQuery, req });
});

export default Page;
