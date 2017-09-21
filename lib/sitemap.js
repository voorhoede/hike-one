const dataLoader = require('./data-loader/index');
const baseUrl = 'https://hike.one/';

// mapping of all urls
const urlMap = {
	cases: 'case/',
	contact: 'contact/',
	home: '',
	services: 'service/',
	servicesOverview: 'services/',
	team: 'team/',
	topics: 'topic/',
	updates: 'update/',
	updateOverview: 'updates/',
	work: 'work/'
};

function getUrlXml(url) {
	return `<url><loc>${url}</loc></url>`;
}

function buildXMLData(urls) {
	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${urls.join('\n')}
		</urlset>`;
}

function generateSiteMap() {
	return new Promise((resolve) => {
		// load data from dato and loop over all keys
		dataLoader.load().then((data) => {
			const urls = [];
			Object
				.keys(data)
				.map((key) => {
					const item = data[key];
					const prefix = urlMap[key];

					// if an item is an array then it has subitems e.g cases
					if (prefix && Array.isArray(item)) {
						// loop over the subitems and add slugs to url array
						item.map((subItem) => {
							const urlXML = getUrlXml(`${baseUrl}${prefix}${subItem.slug}`);
							urls.push(urlXML);
						});
						// if key is in urlMap and its not an array then the item itself is a page
						// add it to the url array
					} else if (prefix !== undefined) {
						const urlXML = getUrlXml(`${baseUrl}${prefix}`);
						urls.push(urlXML);
					}
				});

			// build xml with url array
			resolve(buildXMLData(urls));
		});
	});
}




const getSitemap = (req, res) => {
	generateSiteMap()
		.then((sitemap) => {
			res.header('Content-Type', 'text/xml');
			res.send(sitemap);
	});
};

module.exports = getSitemap;
