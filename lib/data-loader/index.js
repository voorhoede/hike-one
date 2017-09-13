const confirmReload = require('./confirm-reload')
const delay = require('delay')
const dumpData = require('./dump-data')
const loadData = require('./load-data')

let cachedData

const loadFromCache = () => {
  if (cachedData) {
    return Promise.resolve(cachedData)
  }
  return loadData().then(data => {
    cachedData = data
    return Promise.resolve(cachedData)
  })
}

/**
 * Load data from cache
 * @param {String} [model]  Model name that corresponds to JSON file (e.g. `pages`).
 */
const load = (model) => {
  return loadFromCache().then(data => model ? data[model] : data)
}

/**
 * Reload data from CMS and return new data
 * @param {String} [model]  Model name that corresponds to JSON file (e.g. `pages`).
 */
const reload = (model) => {
  const dump = dumpData()

  dump
    .then(delay(10000)) // wait a bit as dato api gets nervous if we confirm before responding to reload request itself
    .then(() => confirmReload({ success: true }))
    .catch(() => confirmReload({ success: false }))

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
