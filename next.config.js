const withLess = require('@zeit/next-less');

module.exports = withLess({
	distDir: 'dist',
	poweredByHeader: false,
	reactStrictMode: true,
});
