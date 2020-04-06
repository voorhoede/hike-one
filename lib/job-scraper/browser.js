// Load the html string returned by the Homerun widget and scrape using
// DOM methods (browser-side only)
module.exports = (htmlString) => {
	let fragment = document.createDocumentFragment();
	let element = document.createElement('span');

	element.innerHTML = htmlString;
	fragment.appendChild(element);

	const jobElements = element.querySelectorAll('.homerun-widget__vacancy');
	const list = Array.from(jobElements).reduce((list, element) => {
		const url = element.getAttribute('href');
		let title, duration, location;

		try {
			title = element.querySelector('.homerun-widget__vacancy__title').textContent;
			duration = element.querySelector('.homerun-widget__vacancy__type').textContent;
			location = element.querySelector('.homerun-widget__vacancy__department').textContent;
		} catch (e) {
			return [...list];
		}

		if (!url || !title || !duration || !location) {
			return [...list];
		}

		return [...list, { url, title, duration, location }];
	}, []);

	element = null;
	fragment = null;

	return list;
};
