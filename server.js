const apiRouter = require('./lib/api-router');
const dataLoader = require('./lib/data-loader');
const getSitemap = require('./lib/sitemap');
const redirection = require('./lib/www-redirect');

const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const startServer = () => server.listen(port, (err) => {
	if (err) throw err;
	console.log(`> Ready on http://localhost:${port}`);
});

server.use(compression());
server.use(helmet());
server.use('/sitemap.xml', getSitemap);
server.use(express.static('./static/root'));
server.use(redirection);
server.use(cookieParser());
server.use('/api/', apiRouter);
server.use('/guide/', express.static('./build/guide/'));
server.get('/10years', (req, res) => {
	res.redirect(307, 'https://10years.hike.one');
});
server.get('/borrel', (req, res) => {
	res.redirect(307, 'https://events.blackbirdrsvp.com/hike-one-housewarming');
});
server.get('/case/:slug', (req, res) => app.render(req, res, '/case', {slug: req.params.slug}));
server.get('/service/:slug', (req, res) => app.render(req, res, '/service', {slug: req.params.slug}));
server.get('/team/:slug', (req, res) => app.render(req, res, '/team', {slug: req.params.slug}));
server.get('/update/:slug', (req, res) => app.render(req, res, '/update', {slug: req.params.slug}));
server.get('/topic/:slug', (req, res) => app.render(req, res, '/topic', {slug: req.params.slug}));
server.get('*', (req, res) => handle(req, res));

Promise.all([
	app.prepare(),
	dataLoader.load(),
])
.then(startServer);
