import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'

import Layout from '../components/layout/layout'
import MenuBar from '../components/menu-bar/menu-bar'
import Footer from '../components/footer/footer'
import PageHeader from '../components/page-header/page-header'
import TeamSelector from '../components/team-selector/team-selector'
import TeamOverview from '../components/team-overview/team-overview'
import TeamMembersOverview from '../components/team-members-overview/team-members-overview'
import VacancyOverview from '../components/vacancy-overview/vacancy-overview'
import cookie from '../components/_helpers/cookie'
import getData, { handleError } from '../lib/get-data'

let scrapeJobs

if (!process.browser) {
  scrapeJobs = require('../lib/job-scraper/server')
} else {
  scrapeJobs = require('../lib/job-scraper/browser')
}

const Team = ({
  tab = '',
  TeamOverviewData = {},
  TeamMembersData = [],
  VacanciesOverviewData = {},
  VacanciesData = [],
  fontsLoaded = '',
  fullUrl = '',
  queryParam = '',
}) => (
  <Layout
    title="Hike One - Team"
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
          image={TeamOverviewData.header.backgroundImage.url}
        />

        <div className={`page-scrolling-content-small`}>
          <TeamSelector slug={tab} />
          {tab === 'culture' && (
            <TeamOverview
              data={TeamOverviewData}
            />
          )}
          {tab === 'people' && (
            <TeamMembersOverview
              introText={TeamMembersOverview.peopleTabIntro}
              team={TeamMembersData}
              queryParam={queryParam}
            />
          )}
          <VacancyOverview
            overview={VacanciesOverviewData}
            vacancies={VacanciesData}
          />
        </div>

      </article>

      <Footer
        callToActionLabel={TeamOverviewData.footer.callToActionLabel}
        callToActionUrl={TeamOverviewData.footer.callToActionUrl}
      />
    </main>
  </Layout>
)

Team.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const queryParam = req && req.query && req.query.filter
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const tab = query.slug
  //check if slug is not equal to people or culture it will redirect to error page
  if (!/^(?:people|culture)$/.test(tab)) {
    return handleError(res)
  }

  const VacanciesData = await fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
    .then(response => response.text())
    .then(await scrapeJobs)

  const [TeamOverviewData, TeamMembersData, VacanciesOverviewData] = await fetchAll([
    'team',
    'people',
    'vacancies-overview',
  ])

  return {
    tab,
    TeamOverviewData,
    TeamMembersData,
    VacanciesOverviewData,
    VacanciesData,
    fontsLoaded,
    fullUrl,
    queryParam,
  }
}

Team.propTypes = {
  tab: PropTypes.string,
  TeamOverviewData: PropTypes.object,
  TeamMembersData: PropTypes.array,
  VacanciesOverviewData: PropTypes.object,
  VacanciesData: PropTypes.array,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
  queryParam: PropTypes.string,
}

export default Team
