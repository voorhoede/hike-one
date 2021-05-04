const cheerio = require('cheerio');

// Load the html string returned by the Homerun widget and scrape using
// cheerio (server-side only)
module.exports = (htmlString) => {
	let list = [];
	let $ = cheerio.load(htmlString);

	$('.jobs-departments > div').each((index, element) => {
		let jobs = [];
		const name = $('.homerun-widget__subtitle', element).text();

		$('.homerun-widget__vacancy', element).each((index, element) => {
			const url = $(element).attr('href');
			let title, duration, location;
			title = $('.homerun-widget__vacancy__title', element).text();
			duration = $('.homerun-widget__vacancy__type', element).text();
			location = $('.homerun-widget__vacancy__department', element).text();

			if (!url || !title || !duration || !location) {
				return false;
			}

			jobs.push({ url, title, duration, location });
		});

		list.push({ name, jobs });
	});

	return list;
};
