import '../styles/index.less';

import fetchContent from '../lib/fetch-content';

import Layout from '../components/layout/layout';
import CaseExtractSmall from '../components/case-extract-small/case-extract-small';
import Contact from '../components/contact/contact';
import ContactShapes from '../components/contact/contact-shapes';
import Footer from '../components/footer/footer';
import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeaderNew from '../components/page-header-new/page-header-new';
import ServicesCards from '../components/services-cards/services-cards';
import TextCenter from '../components/text-center/text-center';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';

const Page = ({ service, servicesOverview, footer, preview }) => {
	const {
		contactCta,
		header,
		highlightedCases,
		highlightedCasesBody,
		highlightedCasesTitle,
		highlightedUpdates,
		highlightedUpdatesBody,
		highlightedUpdatesTitle,
		servicesItemTitle,
		servicesItemBody,
		serviceItems,
	} = servicesOverview;
	const hasContactCta = Object.entries(contactCta).length && contactCta.constructor === Object;

	return (
		<Layout preview={preview}>
			<Head
				title={service.seo.title}
				description={service.seo.description}
				image={service.seo.image}
				twitterCard={service.seo.twitterCard}
			/>

			<MenuBar color="white" />

			<div className="services-page layout-parallax">
				<PageHeaderNew
					title={header.title}
					animation="basic"
					animationTriangleColor={header.animationTriangleColor}
					animationBackgroundColor={header.animationBackgroundColor}
				/>

				<main className="page-scrolling-content-small">
					<ServicesCards
						title={servicesItemTitle}
						body={servicesItemBody}
						services={serviceItems}
					/>

					{hasContactCta && (
						<Contact
							title={contactCta.title}
							button={contactCta.button}
							link={contactCta.externalLink}
						>
							<ContactShapes position="front" />
						</Contact>
					)}

					<section className="work-overview">
						<div className="container">
							<TextCenter title={highlightedCasesTitle} text={highlightedCasesBody} />
							<div className="container-inner">
								{highlightedCases.map((item, index) => (
									<CaseExtractSmall
										key={index}
										title={item.title}
										subtitle={item.subtitle}
										image={item.image}
										companyName={item.case.companyName}
										color={item.case.caseThemeColor.hex}
										slug={item.case.slug}
									/>
								))}
							</div>
						</div>
					</section>

					<section className="update-overview">
						<div className="container">
							<TextCenter title={highlightedUpdatesTitle} text={highlightedUpdatesBody} />
							<div className="container-inner">
								{highlightedUpdates.map((update, index) => (
									<UpdateExtractSmall
										key={index}
										index={index}
										authors={update.authors}
										category={update.category.name}
										color={update.themeColor.hex}
										date={update.date}
										link={update.externalLink}
										slug={update.slug}
										image={update.image.url}
										target={update.externalLink ? true : false}
										title={update.title}
										topic={update.topic}
									/>
								))}
							</div>
						</div>
					</section>
				</main>
			</div>

			<Footer form={footer.form} />
		</Layout>
	);
};

export const getStaticProps = async ({ preview }) => {
	const graphqlQuery = /* GraphQL */ `
		{
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
				servicesItemTitle
				servicesItemBody

				serviceItems {
					text
					title
					button
					iconColor {
						color
					}
					link {
						slug
					}
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
					image {
						url
					}
					case {
						slug
						companyName
						caseThemeColor {
							hex
						}
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
					authors {
						name
					}
					category {
						name
					}
					themeColor {
						hex
					}
					externalLink
					image {
						url
					}
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

	return {
		props: await fetchContent({ graphqlQuery, preview }),
		revalidate: 60 * 60 * 8,
	};
};

export default Page;
