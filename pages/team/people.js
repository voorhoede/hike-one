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

Page.getInitialProps = withCacheControl(async ({ query, req }) => {
	const countQuery = /* GraphQL */ `
		{
			_allPeopleMeta { count }
		}
	`;

	const peopleQuery = (first, skip) => {
		return `
			{
				allPeople(first: ${first}, skip: ${skip}, orderBy: name_ASC) {
					id
					name
					hide
					photo { url }
					roles { title }
					departments { title }
				}
			}
		`;
	}

	const contentQuery = /* GraphQL */ `
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

	const countResponse = await fetchContent({ graphqlQuery: countQuery, req });
	const contentResponse = await fetchContent({ graphqlQuery: contentQuery, req });
	const peopleCount = countResponse._allPeopleMeta.count;
	const allPeople = [];

	for (let i = 0; i < peopleCount / 100; i++) {
		const query = peopleQuery(100, i * 100);
		const response = await fetchContent({ graphqlQuery: query, req });
		allPeople.push(...response.allPeople);
	}

	const content = {
		...contentResponse,
		allPeople,
	}

	return Promise.all([
		content,
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
