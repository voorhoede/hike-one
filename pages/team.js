import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData, { handleError } from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  Footer,
  Layout,
  MenuBar,
  PageHeader,
  TeamMembersOverview,
  TeamOverview,
  TeamSelector,
  VacancyOverview,
} from '../components'

let scrapeJobs

if (!process.browser) {
  scrapeJobs = require('../lib/job-scraper/server')
} else {
  scrapeJobs = require('../lib/job-scraper/browser')
}

const Team = ({
  tab = '',
  teamOverviewData = {},
  teamData = [],
  vacanciesOverviewData = {},
  vacanciesData = [],
  fontsLoaded = '',
  fullUrl = '',
  queryParam = '',
}) => (
  <Layout
    title="Hike One - Team"
    fontsLoaded={fontsLoaded}
    seo={teamOverviewData.seo}
    url={fullUrl}>
    <main className="main js-main">
      <MenuBar color="white" />

      <article className="article">
        <PageHeader
          isSmall={true}
          title={teamOverviewData.header.title}
          subtitle={teamOverviewData.header.subtitle}
          image={teamOverviewData.header.backgroundImage.url}
        />

        <div className={`page-scrolling-content-small`}>
          <TeamSelector slug={tab} />
          {tab === 'culture' && (
            <TeamOverview
              data={teamOverviewData}
            />
          )}
          {tab === 'people' && (
            <TeamMembersOverview
              introText={TeamMembersOverview.peopleTabIntro}
              team={teamData}
              queryParam={queryParam}
            />
          )}
          <VacancyOverview
            overview={vacanciesOverviewData}
            vacancies={vacanciesData}
          />
        </div>

      </article>

      <Footer form={teamOverviewData.footer.form} />

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

  const vacanciesData = await fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
    .then(response => response.text())
    .then(await scrapeJobs)

  const [teamOverviewData, teamData, vacanciesOverviewData] = await fetchAll([
    'team',
    'people',
    'vacancies-overview',
  ])

  return {
    tab,
    teamOverviewData,
    teamData,
    vacanciesOverviewData,
    vacanciesData,
    fontsLoaded,
    fullUrl,
    queryParam,
  }
}

Team.propTypes = {
  tab: PropTypes.string,
  teamOverviewData: PropTypes.object,
  teamData: PropTypes.array,
  vacanciesOverviewData: PropTypes.object,
  vacanciesData: PropTypes.array,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
  queryParam: PropTypes.string,
}

export default Team
