require('dotenv').config();

const {
  ENVIRONMENT:env,
  MAIN_DOMAIN:domain = '',
  NOW_GITHUB_DEPLOYMENT:fromGithub
} = process.env

const isFromGithub = Boolean(fromGithub)

// The app should crash if there is no apex domain set in the environment
// variable MAIN_DOMAIN
if (!domain) {
  throw new Error('App main domain name not found in env.DOMAIN')
}

// Staging environment gets the environment name as subdomain
let mainDomain = env === 'staging' ? `${env}.${domain}` : domain

// Redirect to canonical URL
module.exports = (req, res, next) => {
  // proceed if host matches canonical name
  // or if we're in a PR environment (deployed by now for github)
  if (req.hostname === mainDomain || isFromGithub) {
    return next()
  }
  // else redirect to canonical name
  res.redirect(301, `https://${mainDomain}${req.url}`)
}
