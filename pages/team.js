import React from 'react';
import "isomorphic-fetch";
import cheerio from 'cheerio'

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import TeamSelector from '../components/team-selector/team-selector';
import TeamOverview from '../components/team-overview/team-overview';
import TeamMembersOverview from '../components/team-members-overview/team-members-overview';
import VacancyOverview from '../components/vacancy-overview/vacancy-overview'
import cookie from '../components/_helpers/cookie';
import getData, {handleError} from '../lib/get-data'

const Team = ({ tab, TeamOverviewData, PeopleTabData, TeamMembersData, VacanciesOverviewData, VacanciesData, fontsLoaded, fullUrl, queryParam}) => (
	<Layout title="Hike One - Team"
			fontsLoaded={fontsLoaded}
			seo={TeamOverviewData.seo}
			url={fullUrl}>
		<main className="main js-main">
			<MenuBar color="white" />

			<article className="article">
				<PageHeader
					isSmall={true}
					title={TeamOverviewData.header.title}
					subtitle={TeamOverviewData.header.subtitle}
					image={TeamOverviewData.header.backgroundImage.url} />

				<div className={`page-scrolling-content-small`}>
					<TeamSelector
						slug={tab} />

					{
						tab === 'culture' &&
						<TeamOverview
							data={TeamOverviewData} />
					}

					{
						tab === 'people' &&
						<TeamMembersOverview
							peopleTab={PeopleTabData}
							team={TeamMembersData}
							queryParam={queryParam} />
					}

					<VacancyOverview
						overview={VacanciesOverviewData}
						vacancies={VacanciesData} />
				</div>
			</article>
			<Footer
				callToActionLabel={TeamOverviewData.footer.callToActionLabel}
				callToActionUrl={TeamOverviewData.footer.callToActionUrl} />
		</main>
	</Layout>
);

Team.getInitialProps = async ({req, res, query, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const queryParam = req && req.query && req.query.filter
	const fetchJson = (model) => getData(baseUrl, model, res)
	const fetchAll = (models) => Promise.all(models.map(fetchJson));
	const tab = query.slug;
	//check if slug is not equal to people or culture it will redirect to error page
	if (!/^(?:people|culture)$/.test(tab)) {
		return handleError(res)
	}

	const VacanciesData = await fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
		.then(response => response.text())
		.then(str => {
			let list = []
			let $ = cheerio.load(str)

			$('.homerun-widget__vacancy').each((index, element) => {
				list.push({
					url: $(element).attr('href'),
					title: $('.homerun-widget__vacancy__title', element).text(),
					duration: $('.homerun-widget__vacancy__type', element).text(),
					location: $('.homerun-widget__vacancy__department', element).text()
				})
			})

			return list
		})


		const [TeamOverviewData, PeopleTabData, TeamMembersData, VacanciesOverviewData] = await fetchAll([
		`team`,
		`people-tab`,
		`people`,
		`vacancies-overview`,
	]);

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { tab, TeamOverviewData, PeopleTabData, TeamMembersData, VacanciesOverviewData, VacanciesData, fontsLoaded, fullUrl, queryParam };
};

export default Team;
