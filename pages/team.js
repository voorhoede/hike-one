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
  footer = {},
  fontsLoaded = '',
  fullUrl = '',
  tab = '',
  team = {},
  people = [],
  vacanciesOverview = {},
  vacancies = [],
  queryParam = '',
}) => (
  <Layout
    title="Hike One - Team"
    fontsLoaded={fontsLoaded}
    seo={team.seo}
    url={fullUrl}>
    <main className="main js-main">
      <MenuBar color="white" />

      <article className="article">
        <PageHeader
          isSmall={true}
          title={team.header.title}
          subtitle={team.header.subtitle}
          image={team.header.backgroundImage.url}
          video={team.header.video ? team.header.video : null}
        />

        <div className={`page-scrolling-content-small`}>
          <TeamSelector slug={tab} />
          {tab === 'culture' && (
            <TeamOverview
              data={team}
            />
          )}
          {tab === 'people' && (
            <TeamMembersOverview
              introText={team.peopleTabIntro}
              team={people}
              queryParam={queryParam}
            />
          )}
          <VacancyOverview
            overview={vacanciesOverview}
            vacancies={vacancies}
          />
        </div>

      </article>

      <Footer form={footer.form} />

    </main>
  </Layout>
)

Team.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const queryParam = req && req.query && req.query.filter
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const tab = query.slug
  //check if slug is not equal to people or culture it will redirect to error page
  if (!/^(?:people|culture)$/.test(tab)) {
    return handleError(res)
  }

  const vacancies = await fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
    .then(response => response.text())
    .then(await scrapeJobs)

  const [footer, team, people, vacanciesOverview] = await fetchAll(['footer', 'team', 'people', 'vacancies-overview'])

  return {
    footer,
    fontsLoaded,
    fullUrl,
    tab,
    team,
    people,
    vacanciesOverview,
    vacancies,
    queryParam,
  }
}

Team.propTypes = {
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
  tab: PropTypes.string,
  team: PropTypes.object,
  people: PropTypes.array,
  vacanciesOverview: PropTypes.object,
  vacancies: PropTypes.array,
  queryParam: PropTypes.string,
}

export default Team
