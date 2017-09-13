const dataLoader = require('./lib/data-loader')
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const reloadToken = process.env.TOKEN;

app.prepare()
	.then(() => {
		const server = express();

		// so we can serve files from the root directory instead of next.js default static folder
		server.use(express.static('./static/root'));

		server.use(cookieParser());
		server.use('/guide/', express.static('./build/guide/'));

		server.post('/api/reload-data/:token', (req, res) => {
			if (reloadToken && reloadToken === req.params.token) {
				dataLoader.reload()
				.then(newData => {
					res.json(newData)
					console.log('Data reloaded.')
				})
				.catch(error => {
					res.status(500).json({ status: 'Error loading data.' })
					console.error('Error reloading data', error)
				})
			} else {
				res.status(401).json({ status: 'Invalid token.' })
			}
		})

		server.get('/api/:model', (req, res) => {
			const { model } = req.params;
			dataLoader.load(model).then(data => res.json(data));
		})

		server.get('/api/:model/:slug', (req, res) => {
			const { model, slug } = req.params;
			dataLoader.load(model)
				.then(items => items.find(item => item.slug === slug))
				.then(item => res.json(item));
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

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:3000');
		});
	});
