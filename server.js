const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require('fs');

app.prepare()
	.then(() => {
		const server = express();

		// so we can serve files from the root directory instead of next.js default static folder
		server.use(express.static('./static/root'));
		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:3000');
		});
	});
