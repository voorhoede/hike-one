require('dotenv').config()
const { sortBy } = require('lodash')

module.exports = (dato, root) => {
  root.directory('data/current', dir => {
    dir.createDataFile('cases.json', 'json', mapCollection(dato.cases))
    dir.createDataFile('contact.json', 'json', dato.contactPage.toMap(5))
    dir.createDataFile('cookie-bar.json', 'json', dato.cookieBar.toMap())
    dir.createDataFile('error-pages.json', 'json', mapCollection(dato.errorPages))
    dir.createDataFile('footer.json', 'json', dato.footer.toMap())
    dir.createDataFile('home.json', 'json', dato.home.toMap())
    dir.createDataFile('people.json', 'json', sortBy(mapCollection(dato.collectionsByType.people), 'name'))
    dir.createDataFile('redirects.json', 'json', redirectsToJson(dato.redirects))
    dir.createDataFile('services.json', 'json', mapCollection(dato.services))
    dir.createDataFile('team.json', 'json', dato.team.toMap())
    dir.createDataFile('team-images-21.json', 'json', dato.collectionsByType.teamImage21S[0].toMap())
    dir.createDataFile('team-images-34.json', 'json', dato.collectionsByType.teamImage34S[0].toMap())
    dir.createDataFile('thank-you.json', 'json', dato.thankYouPage.toMap())
    dir.createDataFile('topics.json', 'json', mapCollection(dato.topics))
    dir.createDataFile('update-extracts.json', 'json', mapCollection(dato.updateExtracts))
    dir.createDataFile('update-overview.json', 'json', dato.updateOverview.toMap())
    dir.createDataFile('updates.json', 'json', formatUpdates(mapCollection(dato.updates)))
    dir.createDataFile('vacancies-overview.json', 'json', dato.vacancyOverview.toMap())
    dir.createDataFile('vacancies.json', 'json', mapCollection(dato.vacancies))
    dir.createDataFile('work.json', 'json', dato.work.toMap())
  })

  async function formatUpdates(allUpdates) {
    const formatAll = () => Promise.all(allUpdates.map(getRelatedUpdates))
    const updates = await formatAll()
     return updates
  }

  function getRelatedUpdates(update) {
    const tags = update.tags.map(tag => Number(tag.id))
    const id = update.id

     const query = `query relatedUpdates($tags: [ItemId], $id: ItemId!) {
      allUpdates(
        orderBy: [date_DESC],
        filter: {
          tags: { anyIn: $tags },
          id: { neq: $id },
          updateExtract: { exists: true }
        },
        first: 3
      ) {
        updateExtract {
          title,
          id,
          image {
            url,
          }
          themeColor {
            hex,
          },
          category {
            name,
          },
          date,
          authors {
            name,
          },
          topic,
          externalLink,
        }
      }
    }`

    return fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.DATO_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: query,
        variables: { tags, id }
      })
    })
    .then(res => res.json())
    .then(res => {
      const relatedUpdates = res.data.allUpdates.map(update => update.updateExtract)
      return { ...update, relatedUpdates }
    })
    .catch((error) => console.log(error))
  }

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
