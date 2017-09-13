/**
 * Fetch data from Dato CMS and save it to the file system.
 *
 * Uses internal `dump` function from the `datocms-client`
 * See https://github.com/datocms/js-datocms-client/blob/c51b03bdad3d44d836a9d4a046ec65150e4511e4/src/dump/dump.js#L62
 * Which requires `babel-polyfill` and `whatwg-fetch` as these are normally loaded by the Dato CMS CLI.
 * See https://github.com/datocms/js-datocms-client/blob/c51b03/bin/dato.js#L2-L3
 */
require('babel-polyfill')
require('whatwg-fetch')

const dump = require('datocms-client/lib/dump/dump')
const path = require('path')
const SiteClient = require('datocms-client').SiteClient

require('dotenv').config()

const baseDir = path.join(__dirname, '..', '..')
const client = new SiteClient(process.env.DATO_API_TOKEN, { 'X-Reason': 'dump', 'X-SSG': '' })
const configFile = path.join(baseDir, 'dato.config.js')
const destinationPath = baseDir

module.exports = () => dump(configFile, client, destinationPath)
