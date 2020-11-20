import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Layout from '../components/layout/layout';
import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeaderNew from '../components/page-header-new/page-header-new';
import UpdateOverview from '../components/update-overview/update-overview';
import Footer from '../components/footer/footer';

const Page = ({
	updateOverview,
	allUpdateExtracts,
	extraUpdateExtracts,
	footer,
	query,
	preview,
}) => (
	<Layout preview={preview}>
		<Head
			title={updateOverview.seo.title}
			description={updateOverview.seo.description}
			image={updateOverview.seo.image}
			twitterCard={updateOverview.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<PageHeaderNew
				title={updateOverview.header.title}
				animation="basic"
				animationTriangleColor={updateOverview.header.animationTriangleColor}
				animationBackgroundColor={updateOverview.header.animationBackgroundColor}
			/>

			<main className="page-scrolling-content-small">
				<UpdateOverview
					data={updateOverview}
					updatesData={[...allUpdateExtracts, ...extraUpdateExtracts]}
					queryParam={query.filter}
				/>
			</main>
		</div>

		<Footer form={footer.form} />
	</Layout>
);

export const getServerSideProps = withCacheControl(async ({ query, preview }) => {
	const graphqlQuery = /* GraphQL */ `
		{
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
					animation
					animationBackgroundColor {
						hex
					}
					animationTriangleColor {
						hex
					}
					backgroundImage {
						url
					}
					subtitle
					title
				}

				mustRead {
					slug
					title
					link: externalLink
					authors {
						name
					}
				}

				highlights {
					id
					title
					topic
					slug
					createdAt
					link: externalLink

					authors {
						name
					}
					category {
						name
					}
					image {
						url
					}
					themeColor {
						hex
					}
				}
			}

			allUpdateExtracts(first: 100, orderBy: date_DESC) {
				id
				slug
				topic
				title
				createdAt
				date
				externalLink
				authors {
					name
				}
				staticAuthors
				category {
					name
				}
				image {
					url
				}
				themeColor {
					hex
				}
			}

			extraUpdateExtracts: allUpdateExtracts(first: 100, skip: 100, orderBy: date_DESC) {
				id
				slug
				topic
				title
				createdAt
				date
				externalLink
				authors {
					name
				}
				staticAuthors
				category {
					name
				}
				image {
					url
				}
				themeColor {
					hex
				}
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
		}
	`;

	const data = await fetchContent({ graphqlQuery, preview }).then((content) => ({
		...content,
		query,
	}));

	return { props: data };
});

export default Page;
