'use strict'
const { ENVIRONMENT:env, DOMAINS:domains } = process.env
const isFromGithub = Boolean(process.env.NOW_GITHUB_DEPLOYMENT)

const allowedDomains = domains.split(' ')

if (!allowedDomains.length) {
  throw new Error('Domains not found in env')
}

let [ mainDomain ] = allowedDomains

if (!mainDomain) {
  // Crash if domains.txt is empty
  throw new Error('Canonical name not found in domains.txt')
}

// Environments other than production or pr get the environment name as subdomain
if (/^(?!production).+$/.test(env)) {
  mainDomain = `${env}.${mainDomain}`
}

// Redirect to canonical URL
module.exports = (req, res, next) => {
  // proceed if host matches canonical name
  // if ENVIRONMENT is not set (development), or if we're in a PR environment
  if (req.hostname === mainDomain || isFromGithub || !env) {
    return next()
  }
  // else redirect to canonical name
  res.redirect(301, `https://${mainDomain}${req.url}`)
}
