const { dataDir } = require('./lib/data-dir');
module.exports = {
	paths: {
		stylesSrc: 'styles/',
		stylesDist: 'static/styles',
		data: `${dataDir}/data/`
	}
};
