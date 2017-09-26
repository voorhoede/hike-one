'use strict';

const fs = require('fs');

const allowedDomains = fs.readFileSync('domains.txt', 'utf8')
	.trim()
	.split('\n');

const mainDomain = allowedDomains[0];

module.exports = (req, res, next) => {

	if(process.env.NODE_ENV !== 'production'){
		return next();
	}

	const hostname = req.hostname;

	if (!allowedDomains.includes(hostname) || /^www/.test(hostname)) {
		return res.redirect(301, `https://${mainDomain}${req.url}`);
	}

	next();
}
