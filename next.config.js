const withLess = require('@zeit/next-less');

module.exports = withLess({
	poweredByHeader: false,
	reactStrictMode: true,
	// Taken from: https://github.com/developit/nextjs-preact-demo/blob/e7f359b52e8fdd25b8a55f95725c0f8b0fc883c0/next.config.js
	webpack(config) {
		const splitChunks = config.optimization && config.optimization.splitChunks;
		if (splitChunks) {
			const cacheGroups = splitChunks.cacheGroups;
			const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
			if (cacheGroups.framework) {
				cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
					test: preactModules,
				});
				cacheGroups.commons.name = 'framework';
			} else {
				cacheGroups.preact = {
					name: 'commons',
					chunks: 'all',
					test: preactModules,
				};
			}
		}

		return config;
	},
});
