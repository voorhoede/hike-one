import fetchContent from '../../lib/fetch-content';

import Footer from '../../components/footer/footer';
import Head from '../../components/head/head';
import Layout from '../../components/layout/layout';
import MenuBar from '../../components/menu-bar/menu-bar';
import PageHeaderNew from '../../components/page-header-new/page-header-new';
import TeamOverview from '../../components/team-overview/team-overview';
import TeamSelector from '../../components/team-selector/team-selector';
import VacancyOverview from '../../components/vacancy-overview/vacancy-overview';

let scrapeJobs;

if (!process.browser) {
	scrapeJobs = require('../../lib/job-scraper/server');
} else {
	scrapeJobs = require('../../lib/job-scraper/browser');
}

const Page = ({ team, footer, vacancyOverview, vacancies, pathname, preview }) => (
	<Layout preview={preview}>
		<Head
			title={team.seo.title}
			description={team.seo.description}
			image={team.seo.image}
			twitterCard={team.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<PageHeaderNew
				title={team.header.title}
				animation="basic"
				animationTriangleColor={team.header.animationTriangleColor}
				animationBackgroundColor={team.header.animationBackgroundColor}
			/>

			<main className="page-scrolling-content-small">
				<TeamSelector pathname={pathname} />

				<TeamOverview data={team} />

				<VacancyOverview overview={vacancyOverview} vacancies={vacancies} />
			</main>
		</div>

		<Footer showForm={footer.showForm} form={footer.form} />
	</Layout>
);

export const getStaticProps = async ({ preview }) => {
	const graphqlQuery = /* GraphQL */ `
		{
			team {
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

				collage {
					title
					text
					imageBig {
						url
					}
					imageSmall {
						url
					}
				}

				cta {
					... on CallToActionRecord {
						itemType: _modelApiKey
						title
						buttonText
						url
						bgColor {
							hex
						}
						titleWhite
						fullWidth
						isExternalLink
					}
				}

				galleryTitle
				amsterdamOffice {
					url
				}
				rotterdamOffice {
					url
				}
				eindhovenOffice {
					url
				}

				statistics {
					summaryLabel
					summaryCount
					group1Label
					group1Count
					group2Label
					group2Count
					group3Label
					group3Count
					linkLabel
					linkTarget
				}

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

				content {
					... on _4060TextLeftRecord {
						itemType: _modelApiKey
						title
						text
						image {
							url
							format
						}
					}
					... on _4060TextRightRecord {
						itemType: _modelApiKey
						title
						text
						image {
							url
							format
						}
					}
					... on TextCenterRecord {
						itemType: _modelApiKey
						title
						text
					}
					... on LogoCarouselRecord {
						itemType: _modelApiKey
						title
						companies {
							name
							logo {
								url
							}
						}
					}
					... on CollaborationRecord {
						itemType: _modelApiKey
						title
						text
						companies {
							name
							website
							logo {
								url
							}
						}
					}
					... on FullWidthImageRecord {
						itemType: _modelApiKey
						title
						subtitle
						image {
							url
						}
					}
					... on CollageRecord {
						itemType: _modelApiKey
						title
						text
						imageBig {
							url
						}
						imageSmall {
							url
						}
					}
					... on InlineImageRecord {
						itemType: _modelApiKey
						caption
						image {
							width
							height
							url
						}
					}
					... on InlineImageLargeRecord {
						itemType: _modelApiKey
						caption
						image {
							width
							height
							url
						}
					}
					... on ImageComboRecord {
						itemType: _modelApiKey
						textTitle
						textContent
						image {
							url
						}

						quote
						quoteColor {
							color
						}
						quoteAuthorTitle
						quoteAuthorName
						quoteAuthorImage {
							url
						}
						quoteAlignLeft
					}
					... on VideoRecord {
						itemType: _modelApiKey
						large
						autoplay
						controls
						mute
						loop

						video {
							provider
							providerUid
							width
							height
						}
					}
					... on CallToActionRecord {
						itemType: _modelApiKey
						title
						buttonText
						url
						bgColor {
							hex
						}
						titleWhite
						fullWidth
						isExternalLink
					}
					... on RichBodyTextRecord {
						itemType: _modelApiKey
						content
						centered
					}
					... on BodyQuoteRecord {
						itemType: _modelApiKey
						quote
						quotee
					}
					... on CarouselRecord {
						itemType: _modelApiKey
						slides {
							media {
								... on ImageRecord {
									mediaType: _modelApiKey
									image {
										url
									}
								}
								... on VideoRecord {
									mediaType: _modelApiKey
									autoplay
									controls
									large
									loop
									mute
									video {
										height
										provider
										providerUid
										width
									}
								}
							}
							body
						}
						isWide: wide
					}
				}

				imageComposition {
					teamImage21 {
						title
						photo {
							url
						}
					}
					teamImage34Large {
						title
						photo {
							url
						}
					}
					teamImage34Small {
						title
						photo {
							url
						}
					}
				}

				teamImage916 {
					title
					photo {
						url
					}
				}
			}

			vacancyOverview {
				title
				tagline
			}

			footer {
				showForm
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

	return Promise.all([
		fetchContent({ graphqlQuery, preview }),
		fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
			.then((response) => response.text())
			.then(scrapeJobs),
	]).then(([content, vacancies]) => ({
		props: { ...content, vacancies },
		revalidate: 60 * 60 * 8,
	}));
};

export default Page;
