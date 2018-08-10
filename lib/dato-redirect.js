const datoRedirects = require('../data/current/redirects.json')

module.exports = (req, res, next) => {
  const redirect = datoRedirects[req.url]
  
  if (!redirect || (redirect && !redirect.statusCode)) { 
   return next()
  }

  const statusCode = parseInt(redirect.statusCode)
  
  if (isNaN(statusCode)) {
    return next()
  }

  res.redirect(statusCode, redirect.to);
}