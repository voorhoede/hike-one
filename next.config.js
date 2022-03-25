const withLess = require('next-with-less');

module.exports = withLess({
	distDir: 'dist',
	poweredByHeader: false,
	reactStrictMode: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	async redirects() {
		return [
			{
				source: '/code',
				destination: 'https://github.com/voorhoede/hike-one',
				permanent: true,
			},
			{
				source: '/join-the-team',
				destination: '/team/careers',
				permanent: true,
			},
			{
				source: '/sprint',
				destination: '/topic/running-design-sprints-masterclass-by-hike-one',
				permanent: true,
			},
			{
				source: '/academy',
				destination: '/topic/masterclasses-by-hike-one',
				permanent: true,
			},
			{
				source: '/lean-innovation',
				destination: 'https://hike.one/topic/lean-innovation',
				permanent: true,
			},
			{
				source: '/meetup',
				destination: 'http://hike-one.typeform.com/to/PNYRzq',
				permanent: true,
			},
			{
				source: '/service/design-sprints',
				destination: '/service/new-product-design',
				permanent: true,
			},
			{
				source: '/pulse',
				destination:
					'https://docs.google.com/spreadsheets/d/1Txqz2Tpkiz9g9Y3-1IoRv3g7b2yK4M9ST_vra6wVFDE/edit?usp=sharing',
				permanent: true,
			},
			{
				source: '/topic/beyond-design',
				destination: '/topic/ux-leadership-breakfast',
				permanent: true,
			},
			{
				source: '/topic/design-sprints',
				destination: '/topic/design-sprint',
				permanent: true,
			},
			{
				source: '/team/culture',
				destination: '/team/careers',
				permanent: true,
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'dashboard.hike.one',
					},
				],
				destination: 'https://sites.google.com/hike.one/dashboard',
				permanent: true,
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'playbook.hike.one',
					},
				],
				destination: 'https://app.gitbook.com/@hikeone/s/project-playbook/',
				permanent: true,
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'company.hike.one',
					},
				],
				destination: 'https://app.gitbook.com/@hikeone/s/company-playbook/',
				permanent: true,
			},
		];
	},
});
