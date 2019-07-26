'use strict'
const { ENVIRONMENT:env, DOMAINS:domains } = process.env
const isFromGithub = Boolean(process.env.NOW_GITHUB_DEPLOYMENT)

const allowedDomains = domains.split(' ')

if (!allowedDomains.length) {
  throw new Error('Domains not found in env')
}

let [ mainDomain ] = allowedDomains

// Environments other than production get the environment name as subdomain
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
