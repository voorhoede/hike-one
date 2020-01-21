import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Footer from '../components/footer/footer';
import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import ServicesOverviewPage from '../components/services-overview-page/services-overview-page';
import ServicesCards from '../components/services-cards/services-cards';

const Page = ({ service, servicesOverview, footer }) => (
	<>
		<Head
			title={service.seo.title}
			description={service.seo.description}
			image={service.seo.image}
			twitterCard={service.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<PageHeader
				isSmall={true}
				title={servicesOverview.header.title}
				subtitle={servicesOverview.header.subtitle}
				image={servicesOverview.header.backgroundImage.url}
			/>

			<main className="page-scrolling-content-small">
				<ServicesCards
					title={servicesOverview.servicesItemTitle}
					body={servicesOverview.servicesItemBody}
					services={servicesOverview.serviceItems}
				/>

				<ServicesOverviewPage
					contact={servicesOverview.contactCta}
					highlightedCasesTitle={servicesOverview.highlightedCasesTitle}
					highlightedCasesBody={servicesOverview.highlightedCasesBody}
					highlightedCases={servicesOverview.highlightedCases}
					highlightedUpdatesTitle={servicesOverview.highlightedUpdatesTitle}
					highlightedUpdatesBody={servicesOverview.highlightedUpdatesBody}
					highlightedUpdates={servicesOverview.highlightedUpdates}
				/>
			</main>
		</div>

		<Footer form={footer.form} />
	</>
);

Page.getInitialProps = withCacheControl(({ req }) => {
	const graphqlQuery = `{
		service {
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
		}

		servicesOverview {
			header {
				title
				subtitle
				backgroundImage { url }
			}
			servicesItemTitle
			servicesItemBody

			serviceItems {
				text
				title
				button
				iconColor { color }
				link { slug }
			}

			contactCta {
				title
				button
				externalLink
			}

			highlightedCasesTitle
			highlightedCasesBody
			highlightedCases {
				title
				subtitle
				image { url }
				case {
					slug
					companyName
					caseThemeColor { hex }
				}
			}

			highlightedUpdatesTitle
			highlightedUpdatesBody
			highlightedUpdates {
				slug
				title
				date
				externalLink
				topic
				authors { name }
				category { name }
				themeColor { hex }
				externalLink
				image { url }
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
	}`;

	return fetchContent({ graphqlQuery, req });
});

export default Page;
