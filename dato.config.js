const { sortBy } = require('lodash')

module.exports = (dato, root) => {
  root.directory('data/current', dir => {
    dir.createDataFile('cases.json', 'json', mapCollection(dato.cases))
    dir.createDataFile('component-guide.json', 'json', dato.componentGuide.toMap())
    dir.createDataFile('contact.json', 'json', dato.contactPage.toMap(5))
    dir.createDataFile('cookie-bar.json', 'json', dato.cookieBar.toMap())
    dir.createDataFile('error-pages.json', 'json', mapCollection(dato.errorPages))
    dir.createDataFile('home.json', 'json', dato.home.toMap())
    dir.createDataFile('people.json', 'json',  sortBy(mapCollection(dato.collectionsByType.people), 'name'))
    dir.createDataFile('redirects.json', 'json', redirectsToJson(dato.redirects))
    dir.createDataFile('service-overview.json', 'json', dato.serviceOverview.toMap())
    dir.createDataFile('services.json', 'json', mapCollection(dato.services))
    dir.createDataFile('team.json', 'json', dato.team.toMap())
    dir.createDataFile('team-images-21.json', 'json', dato.collectionsByType.teamImage21S[0].toMap())
    dir.createDataFile('team-images-34.json', 'json', dato.collectionsByType.teamImage34S[0].toMap())
    dir.createDataFile('thank-you.json', 'json', dato.thankYouPage.toMap())
    dir.createDataFile('topics.json', 'json', mapCollection(dato.topics))
    dir.createDataFile('update-extracts.json', 'json', mapCollection(dato.updateExtracts))
    dir.createDataFile('update-overview.json', 'json', dato.updateOverview.toMap())
    dir.createDataFile('updates.json', 'json', mapCollection(dato.updates))
    dir.createDataFile('vacancies-overview.json', 'json', dato.vacancyOverview.toMap())
    dir.createDataFile('vacancies.json', 'json', mapCollection(dato.vacancies))
    dir.createDataFile('work.json', 'json', dato.work.toMap())
  })

  function mapCollection(collection) {
    return collection.reduce((acc,item) => {
      const mappedData = item.toMap(5)
      acc.push(mappedData)
      return acc
    }, [])
  }

  function redirectsToJson(redirects) {
    return redirects.reduce((urls, redirect) => {
      const { from, to, statusCode } = redirect

      return {
        ...urls,
        [from]: {
          to,
          statusCode,
        }
      }
    }, {})
  }
}
