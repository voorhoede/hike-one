'use strict'
const fs = require('fs')
const env = process.env.ENVIRONMENT
const allowedDomains = fs.readFileSync('domains.txt', 'utf8')
  .trim()
  .split('\n')

let [ mainDomain ] = allowedDomains

if (!mainDomain) {
  // Crash if domains.txt is empty
  throw new Error('Canonical name not found in domains.txt')
}

// Environments other than production or pr get the environment name as subdomain
if (/^(?!pr|production).+$/.test(env)) {
  mainDomain = `${env}.${mainDomain}`
}

// Redirect to canonical URL
module.exports = (req, res, next) => {
  // proceed if host matches canonical name
  // if ENVIRONMENT is not set (development), or if we're in a PR environment
  if (req.hostname === mainDomain || env === 'pr' || !env) {
    return next()
  }
  // else redirect to canonical name
  res.redirect(301, `https://${mainDomain}${req.url}`)
}
