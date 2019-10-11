import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Head from '../components/_helpers/head';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import UpdateOverview from '../components/update-overview/update-overview';
import Footer from '../components/footer/footer';

const Page = ({ updateOverview, allUpdateExtracts, footer }) => (
	<div>
		<Head
			title={updateOverview.seo.title}
			description={updateOverview.seo.description}
			image={updateOverview.seo.image}
			twitterCard={updateOverview.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<main className="main js-main">
			<article className="article">
				<PageHeader
					isSmall={true}
					title={updateOverview.header.title}
					subtitle={updateOverview.header.subtitle}
					image={updateOverview.header.backgroundImage.url}
				/>

				<div className="page-scrolling-content-small">
					<UpdateOverview
						data={updateOverview}
						updatesData={allUpdateExtracts}
						queryParam={updateOverview}
					/>
				</div>
			</article>

			<Footer form={footer.form} />
		</main>
	</div>
);

Page.getInitialProps = withCacheControl(({ query }) =>
	fetchContent(`{
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
	}`)
);

export default Page;
