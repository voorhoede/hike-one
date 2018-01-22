import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import TeamSelector from '../components/team-selector/team-selector';
import TeamOverview from '../components/team-overview/team-overview';
import TeamMembersOverview from '../components/team-members-overview/team-members-overview';
import cookie from '../components/_helpers/cookie';

const Team = ({ tab, TeamOverviewData, TeamMembersData, VacanciesOverviewData, VacanciesData, fontsLoaded, fullUrl}) => (
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
							team={TeamMembersData}
							vacanciesOverview={VacanciesOverviewData}
							vacancies={VacanciesData} />
					}
				</div>
			</article>
			<Footer
				callToActionLabel={TeamOverviewData.footer.callToActionLabel}
				callToActionUrl={TeamOverviewData.footer.callToActionUrl} />
		</main>
	</Layout>
);

Team.getInitialProps = async ({req, query, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const fetchJson = (model) => fetch(`${baseUrl}/api/${model}`).then(res => res.json());
	const fetchAll = (models) => Promise.all(models.map(fetchJson));
	const tab = query.slug;
	const [TeamOverviewData, TeamMembersData, VacanciesOverviewData, VacanciesData] = await fetchAll([
		`team`,
		`people`,
		`vacancies-overview`,
		`vacancies`
	]);

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { tab, TeamOverviewData, TeamMembersData, VacanciesOverviewData, VacanciesData, fontsLoaded, fullUrl };
};

export default Team;
