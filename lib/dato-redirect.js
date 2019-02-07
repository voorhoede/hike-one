const datoRedirects = require('../data/current/redirects.json')

module.exports = (req, res, next) => {
  const redirect = datoRedirects[req.url]

	// @TODO: remove this temporary hack and check redirects from dato in production
  if (req.url === '/meetup') {
	  return res.redirect(301, 'http://hike-one.typeform.com/to/PNYRzq')
  }

  if (!redirect || (redirect && !redirect.statusCode)) {
   return next()
  }

  const statusCode = parseInt(redirect.statusCode)

  if (isNaN(statusCode)) {
    return next()
  }

  res.redirect(statusCode, redirect.to);
}
