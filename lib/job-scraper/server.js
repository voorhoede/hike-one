const cheerio = require('cheerio');

// Load the html string returned by the Homerun widget and scrape using
// cheerio (server-side only)
module.exports = (htmlString) => {
	let list = [];
	let $ = cheerio.load(htmlString);

	$('.homerun-widget__vacancy').each((index, element) => {
		list.push({
			url: $(element).attr('href'),
			title: $('.homerun-widget__vacancy__title', element).text(),
			duration: $('.homerun-widget__vacancy__type', element).text(),
			location: $('.homerun-widget__vacancy__department', element).text(),
		});
	});

	return list;
};
