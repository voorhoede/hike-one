/**
 * Fetch data from Dato CMS and save it to the file system.
 */
require('babel-polyfill')
require('whatwg-fetch')
require('dotenv').config()

const dump = require('datocms-client/lib/dump/dump').default
const path = require('path')
const { SiteClient } = require('datocms-client')
const { dumpRoot } = require('../data-dir')

const baseDir = path.join(__dirname, '..', '..')
const client = new SiteClient(process.env.DATO_API_TOKEN)
const configFile = path.join(baseDir, 'dato.config.js')
const destinationPath = dumpRoot
const isPreviewMode = /^(?:staging|development)$/.test(process.env.NODE_ENV)

module.exports = () => dump(configFile, client, isPreviewMode, destinationPath)
