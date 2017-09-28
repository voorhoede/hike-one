'use strict';

const fs = require('fs');

const env = process.env.ENVIRONMENT;
const allowedDomains = fs.readFileSync('domains.txt', 'utf8')
	.trim()
	.split('\n');
let mainDomain = allowedDomains[0];

if (!mainDomain) {
	// Crash if domains.txt is empty
	throw new Error('Canonical name not found in domains.txt');
}

if (env !== 'production') {
	// Environments other than production get the environment name as subdomain
	mainDomain = `${env}.${mainDomain}`;
}

// Redirect to canonical URL
module.exports = (req, res, next) => {
	// proceed if host matches canonical name
	// or if ENVIRONMENT is not set (development)
	if (req.hostname === mainDomain || !env) {
		return next();
	}
	// else redirect to canonical name
	res.redirect(301, `https://${mainDomain}${req.url}`);
}
