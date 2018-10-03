const confirmReload = require('./confirm-reload')
const delay = require('delay')
const dumpData = require('./dump-data')
const loadData = require('./load-data')
const retry = require('./retry');
const reset = require('./reset');

let cachedData

const loadFromCache = () => {
	if (cachedData) {
		console.log('using cached data')
		return Promise.resolve(cachedData)
	}
	return loadData()
		.then(data => {
			cachedData = data
			console.log('using data from filesystem')
			return Promise.resolve(cachedData)
		})
		.catch(err => {
			console.log('using data from dato cms')
			return dumpData().then(loadFromCache)
		})
}

/**
 * Load data from cache
 * @param {String} [model] Model name that corresponds to JSON file (e.g. `pages`).
 */
const load = (model) => {
	return loadFromCache().then(data => model ? data[model] : data)
}

/**
 * Reload data from CMS and return new data
 * @param {String} [model] Model name that corresponds to JSON file (e.g. `pages`).
 */
const reload = (model) => {
	const dump = dumpData()

	dump
		.then(delay(5000)) // wait a bit as dato api gets nervous if we confirm before responding to reload request itself
		.then(() => retry(() => confirmReload({ success: true }), { action: 'report successful build result' })
			.then(() => console.log('Successfully reported good build result to datocms'))
			.catch(() => console.error('Failed to report good build result to datocms'))
		)
		.catch(() => retry(() => confirmReload({ success: false }), { action: 'report failed build result' })
			.then(() => console.log('Successfully reported bad build result to datocms'))
			.catch(() => console.error('Failed to report bad build result to datocms'))
		)
		.then(() => reset()
			.then(() => console.log('Deployment status reset success'))
			.catch(() => console.error('Deployment status reset failure'))
		)

	return dump
		.then(loadData)
		.then(data => {
			cachedData = data
			return Promise.resolve(cachedData)
		})
}

module.exports = {
	dump: dumpData,
	load,
	reload,
}
