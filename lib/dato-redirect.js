const updateNotifyer = require('./data-loader/notify');
const { dataDir } = require('./data-dir');
const { readFile } = require('fs');
const { join } = require('path');
const pathToRedirects = join(dataDir, 'redirects.json')

let datoRedirects = require(pathToRedirects);

// Dato dump script emits an event after a successful dump in response to the
// cms triggering a content update. Re-load redirects file if this happens
updateNotifyer.on('contentupdate', () => {
	console.log('re-load redirects after dato content update')
	readFile(pathToRedirects, 'utf8', (err, contents) => {
		if (err) {
			return console.error(`Error: could not read redirects file at ${pathToRedirects}`)
		}
		try {
			datoRedirects = JSON.parse(contents)
		} catch (err) {
			console.error(`Could not parse redirects.json. ${err.message}`)
		}
	})
})

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
