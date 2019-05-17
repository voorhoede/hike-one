/**
 * Fetch data from Dato CMS and save it to the file system.
 */

const path = require('path')
const SiteClient = require('datocms-client').SiteClient
const { dumpRoot } = require('../data-dir')

require('dotenv').config()

const baseDir = path.join(__dirname, '..', '..')
const client = new SiteClient(process.env.DATO_API_TOKEN, { 'X-Reason': 'dump', 'X-SSG': '' })
const configFile = path.join(baseDir, 'dato.config.js')
const isPreviewMode = /^(?:staging|development)$/.test(process.env.ENVIRONMENT)

module.exports = () => Promise.resolve(configFile, client, isPreviewMode, dumpRoot)
