const { uniq } = require('lodash')

module.exports = (dato, root) => {
	root.directory('data/current', dir => {
		dir.createDataFile('team.json', 'json', dato.team.toMap())

		dir.createDataFile('tags.json', 'json', mapCollection(dato.tags))

		dir.createDataFile('people-tab.json', 'json', dato.peopleTab.toMap())

		const teamImages34 = dato.collectionsByType.teamImage34S
		dir.createDataFile('teamImages34.json', 'json', teamImages34[0].toMap())

		const teamImages21 = dato.collectionsByType.teamImage21S
		dir.createDataFile('teamImages21.json', 'json', teamImages21[0].toMap())

		const peopleData = dato.collectionsByType.people
		dir.createDataFile('people.json', 'json',	mapCollection(peopleData))

		dir.createDataFile(`service-overview.json`, 'json', dato.serviceOverview.toMap())

		dir.createDataFile(`home.json`, 'json', dato.home.toMap())

		dir.createDataFile('cases.json', 'json', mapCollection(dato.cases))

		dir.createDataFile('component-guide.json', 'json', dato.componentGuide.toMap())

		dir.createDataFile(`contact.json`, 'json', dato.contactPage.toMap())

		dir.createDataFile('work.json', 'json', dato.work.toMap())

		dir.createDataFile('update-overview.json', 'json', dato.updateOverview.toMap())

		dir.createDataFile('update-extracts.json', 'json', mapCollection(dato.updateExtracts))

		dir.createDataFile('updates.json', 'json', mapUpdates(dato.tags, dato.updates))

		dir.createDataFile('redirects.json', 'json', redirectsToJson(dato.redirects))

		dir.createDataFile('services.json', 'json', mapCollection(dato.services))

		dir.createDataFile('thank-you.json', 'json', dato.thankYouPage.toMap())

		dir.createDataFile('topics.json', 'json', mapCollection(dato.topics))

		dir.createDataFile('vacancies.json', 'json', mapCollection(dato.vacancies))

		dir.createDataFile('vacancies-overview.json', 'json', dato.vacancyOverview.toMap())
	})

	function mapCollection(collection) {
		return collection.reduce((acc,item) => {
			const mappedData = item.toMap()
			acc.push(mappedData)
			return acc
		}, [])
	}

	function mapUpdates(tags, updates) {
		const mappedUpdates = mapCollection(updates)
		const mappedTags = mapCollection(tags)
		const updatesByTag = getUpdatesByTagId(mappedTags, mappedUpdates)

		return mappedUpdates.reduce((arr, update) => {
			const ids = update.tags.reduce((acc, tag) => {
				acc.push(...updatesByTag[tag.id])
				return uniq(acc)
			}, []).filter(updateId => updateId !== update.id)

			const updateExtracts = ids.map(id => {
				const data = mappedUpdates.find(item => item.id === id)
				return data.updateExtract
			}).slice(0, 3)

			arr.push({ ...update, relatedUpdates: updateExtracts })

			return arr
		}, [])
	}

	function getUpdatesByTagId(tags, updates) {
		const updatesByTag = tags.reduce((obj, tag) => {
			const filteredUpdates = updates.filter(update => {
				const ids = update.tags.map(item => item.id)

				if (ids.includes(tag.id)) {
					return update
				}
			}).sort((a, b) => {
				if (a.date > b.date) { return -1 }
				if (a.date < b.date) { return 1 }
				return 0
			}).slice(0, 3)

			obj[tag.id] = filteredUpdates.map(item => item.id)

			return obj
		}, {})

		return updatesByTag
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
