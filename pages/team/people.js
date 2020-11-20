import '../../styles/index.less';

import fetchContent from '../../lib/fetch-content';
import withCacheControl from '../../lib/with-cache-control';

import Head from '../../components/head/head';
import MenuBar from '../../components/menu-bar/menu-bar';
import PageHeaderNew from '../../components/page-header-new/page-header-new';
import TeamMembersOverview from '../../components/team-members-overview/team-members-overview';
import TeamSelector from '../../components/team-selector/team-selector';
import VacancyOverview from '../../components/vacancy-overview/vacancy-overview';
import Footer from '../../components/footer/footer';

let scrapeJobs;

if (!process.browser) {
	scrapeJobs = require('../../lib/job-scraper/server');
} else {
	scrapeJobs = require('../../lib/job-scraper/browser');
}

const Page = ({ team, footer, vacancyOverview, vacancies, query, pathname, allPeople }) => (
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

				<TeamMembersOverview
					introText={team.peopleTabIntro}
					team={allPeople}
					queryParam={query.filter}
				/>

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
				peopleTabIntro

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

			allPeople(first: 99, orderBy: name_ASC) {
				id
				name
				hide
				photo {
					url
				}
				roles {
					title
				}
				departments {
					title
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
		query,
		pathname,
	}));
});

export default Page;
