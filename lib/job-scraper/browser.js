// Load the html string returned by the Homerun widget and scrape using
// DOM methods (browser-side only)
module.exports = (htmlString) => {
	let fragment = document.createDocumentFragment();
	let element = document.createElement('span');

	element.innerHTML = htmlString;
	fragment.appendChild(element);

	const departmentElements = element.querySelectorAll('.jobs-departments > div');
	const list = Array.from(departmentElements).map((el) => {
		const name = el.querySelector('.homerun-widget__subtitle').textContent;
		const jobElements = el.querySelectorAll('.homerun-widget__vacancy');
		const jobs = Array.from(jobElements).map((el) => {
			const url = el.getAttribute('href');
			let title, duration, location;

			try {
				title = el.querySelector('.homerun-widget__vacancy__title').textContent;
				duration = el.querySelector('.homerun-widget__vacancy__type').textContent;
				location = el.querySelector('.homerun-widget__vacancy__department').textContent;
			} catch (e) {
				return false;
			}

			if (!url || !title || !duration || !location) {
				return false;
			}

			return { url, title, duration, location };
		});

		return { name, jobs };
	}, []);

	element = null;
	fragment = null;

	return list;
};
