const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const request = require('request-promise-native');
const promisify = require('util').promisify;
const exec = promisify(require('child_process').exec);

const casesPath = './data/current/cases.json';
const servicesPath = './data/current/services.json';
const updatesPath = './data/current/updates.json';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let cases = require(casesPath);
let services = require(servicesPath);
let updates = require(updatesPath);

const fs = require('fs');
const TOKEN = process.env.TOKEN;
const DATO_URL = process.env.DATO_URL;

app.prepare()
	.then(() => {
		const server = express();

		// so we can serve files from the root directory instead of next.js default static folder
		server.use(express.static('./static/root'));

		server.use(cookieParser());
		server.use('/guide/', express.static('./build/guide/'));

		server.get('/api/cases/:slug', (req, res) => {
			const json = cases.find(item => item.slug === req.params.slug);
			res.json(json);
		});

		server.get('/api/services/:slug', (req, res) => {
			const json = services.find(item => item.slug === req.params.slug);
			res.json(json);
		});

		server.get('/api/updates/:slug', (req, res) => {
			const json = updates.find(item => item.slug === req.params.slug);
			res.json(json);
		});

		server.get('/case/:slug', (req, res) => {
			app.render(req, res, '/case', {slug: req.params.slug});
		});

		server.get('/service/:slug', (req, res) => {
			app.render(req, res, '/service', {slug: req.params.slug});
		});

		server.get('/update/:slug', (req, res) => {
			app.render(req, res, '/update', {slug: req.params.slug});
		});

		server.post('/deploy', (req, res) => {
			const token = req.query.token;
			// token matches
			if (token && TOKEN && DATO_URL && token === TOKEN) {
				exec('dato dump')
					.then(() => {
						cases = require(casesPath);
						services = require(servicesPath);
						updates = require(updatesPath);
						confirmDeployment(true, res)
					})
					.catch(err => {
						confirmDeployment(false, res)
					})
			} else {
				res.status(403).send('no can do');
			}
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:3000');
		});
	});

	function confirmDeployment(isSuccess, response) {
		const body = {
			status: isSuccess ? 'success' : 'error'
		}

		return request.post({
			uri: DATO_URL,
			json: true,
			body
		})
		.then(() => {
			response.send('ok')
		})
		.catch(() => response.status(500).send('Dato confirmation error'))
	}
