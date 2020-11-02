const withLess = require('@zeit/next-less');

module.exports = withLess({
	poweredByHeader: false,
	reactStrictMode: true,
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
});
