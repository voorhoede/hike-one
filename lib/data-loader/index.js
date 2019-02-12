const delay = require('delay');
const dumpData = require('./dump-data')
const loadData = require('./load-data')
const confirmDeployStatus = require('./confirm-deploy-status');
const notifier = require('./notify');

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
		.then(() => notifier.notify())
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
		.then(() => delay(15000)) // Wait a magical 15 seconds
		.then(() => confirmDeployStatus(true)
			.then(() => console.log('Deployment success confirmed successfully'))
			.catch(() => console.error('Deployment success confirmation failed'))
		)
		.catch(() => confirmDeployStatus(false)
			.then(() => console.log('Deployment failure confirmed successfully'))
			.catch(() => console.error('Deployment failure confirmation failed'))
		)

	return dump
		.then(loadData)
		.then(data => {
			cachedData = data
			notifier.notify()
			return Promise.resolve(cachedData)
		})
}

module.exports = {
	dump: dumpData,
	load,
	reload,
}
