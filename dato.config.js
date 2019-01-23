const { uniq, sortBy, flattenDeep } = require('lodash')

module.exports = (dato, root) => {
	root.directory('data/current', dir => {
		dir.createDataFile('team.json', 'json', dato.team.toMap())

		dir.createDataFile('people-tab.json', 'json', dato.peopleTab.toMap())

		const teamImages34 = dato.collectionsByType.teamImage34S
		dir.createDataFile('teamImages34.json', 'json', teamImages34[0].toMap())

		const teamImages21 = dato.collectionsByType.teamImage21S
		dir.createDataFile('teamImages21.json', 'json', teamImages21[0].toMap())

		const peopleData = dato.collectionsByType.people
		dir.createDataFile('people.json', 'json',	mapCollection(peopleData))

		dir.createDataFile(`service-overview.json`, 'json', dato.serviceOverview.toMap())

		dir.createDataFile(`home.json`, 'json', dato.home.toMap())

		dir.createDataFile(`cookie-bar.json`, 'json', dato.cookieBar.toMap())

		dir.createDataFile('cases.json', 'json', mapCollection(dato.cases))

		dir.createDataFile('component-guide.json', 'json', dato.componentGuide.toMap())

		dir.createDataFile(`contact.json`, 'json', dato.contactPage.toMap())

		dir.createDataFile('work.json', 'json', dato.work.toMap())

		dir.createDataFile('update-overview.json', 'json', dato.updateOverview.toMap())

		dir.createDataFile('update-extracts.json', 'json', mapCollection(dato.updateExtracts))

		const mappedUpdates = mapCollection(dato.updates)
		const mappedTags = mapCollection(dato.tags)

		const updatesByTagId = getUpdatesByTagId(mappedTags, mappedUpdates)
		dir.createDataFile('updates.json', 'json', mapUpdates(mappedUpdates, updatesByTagId))

		dir.createDataFile('redirects.json', 'json', redirectsToJson(dato.redirects))

		dir.createDataFile('services.json', 'json', mapCollection(dato.services))

		dir.createDataFile('thank-you.json', 'json', dato.thankYouPage.toMap())

		dir.createDataFile('topics.json', 'json', mapCollection(dato.topics))

		dir.createDataFile('vacancies.json', 'json', mapCollection(dato.vacancies))

		dir.createDataFile('vacancies-overview.json', 'json', dato.vacancyOverview.toMap())
	})

	function mapCollection(collection) {
		return collection.reduce((acc,item) => {
			const mappedData = item.toMap(5)
			acc.push(mappedData)
			return acc
		}, [])
	}

	function mapUpdates(updates, updatesByTagId) {
		return updates.map(update => {
			const sortedUpdates = update.tags.map(tag => {
				const filteredUpdates = updatesByTagId[tag.id].filter(item => ((item !== null) && (update.id !== item.id) && (item.updateExtract !== null)))
				return sortBy(filteredUpdates, ['date']).reverse()
			})

			const relatedUpdates = uniq(flattenDeep(sortedUpdates)).slice(0, 3)
			return update = { ...update, relatedUpdates }
		})
	}

	function getUpdatesByTagId(mappedTags, mappedUpdates) {
		const tagsById = {}
		const updates = mappedUpdates.map(update => {
			const tags = update.tags.map(tag => tag.id)
			return { id: update.id, tags, date: update.date, updateExtract: update.updateExtract }
		})

		mappedTags.map(tag => {
			const relatedUpdates = updates.filter(update => update.tags.includes(tag.id))
			tagsById[tag.id] = [ ...relatedUpdates ]
		})

		return tagsById
	}

	function redirectsToJson(redirects) {
		return redirects.reduce((urls, redirect) => {
			const { from, to, statusCode } = redirect

			return {
				...urls,
				[from]: {
					to,
					statusCode
				}
			}
		}, {})
	}
}
