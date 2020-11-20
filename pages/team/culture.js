import '../../styles/index.less';

import fetchContent from '../../lib/fetch-content';
import withCacheControl from '../../lib/with-cache-control';

import Head from '../../components/head/head';
import MenuBar from '../../components/menu-bar/menu-bar';
import PageHeaderNew from '../../components/page-header-new/page-header-new';
import TeamOverview from '../../components/team-overview/team-overview';
import TeamSelector from '../../components/team-selector/team-selector';
import VacancyOverview from '../../components/vacancy-overview/vacancy-overview';
import Footer from '../../components/footer/footer';

let scrapeJobs;

if (!process.browser) {
	scrapeJobs = require('../../lib/job-scraper/server');
} else {
	scrapeJobs = require('../../lib/job-scraper/browser');
}

const Page = ({ team, footer, vacancyOverview, vacancies, pathname }) => (
	<>
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

		<Footer form={footer.form} />
	</>
);

Page.getInitialProps = withCacheControl(({ query, pathname, req }) => {
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
				callToActionTitle
				callToActionUrl
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

	return Promise.all([
		fetchContent({ graphqlQuery, req }),
		fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
			.then((response) => response.text())
			.then(scrapeJobs),
	]).then(([content, vacancies]) => ({
		...content,
		vacancies,
		pathname,
	}));
});

export default Page;
