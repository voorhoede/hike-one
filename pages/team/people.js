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

const Page = ({ team, footer, vacancyOverview, vacancies, query, allPeople }) => (
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
				<TeamSelector />

				<TeamMembersOverview
					introText={team.peopleTabIntro}
					team={allPeople}
					queryParam={query.filter}
				/>

				{vacancies.length > 0 && (
					<VacancyOverview overview={vacancyOverview} vacancies={vacancies} />
				)}
			</main>
		</div>

		<Footer
			careersText={footer.careersText}
			showForm={footer.showForm}
			form={footer.form}
			industriesLinks={footer.industriesLinks}
			copyrightLinks={footer.copyrightLinks}
		/>
	</>
);

Page.getInitialProps = withCacheControl(({ query, req }) => {
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
			}

			footer {
				careersText
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
				industriesLinks {
					title
					page {
						slug
					}
				}
				copyrightLinks {
					title
					page {
						slug
					}
				}
			}
		}
	`;

	return Promise.all([
		fetchContent({ graphqlQuery, req }),
		fetch(`https://embed.homerun.co/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
			.then((response) => response.text())
			.then(scrapeJobs)
			.catch(() => []),
	]).then(([content, vacancies]) => ({
		...content,
		vacancies,
		query,
	}));
});

export default Page;
