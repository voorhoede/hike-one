const lazyLoad = (target, options) => {
	const defaults = {
		root: null,
		rootMargin: '0px 0px 0px 0px',
		threshold: 0,
	};

	const defaultOptions = { ...defaults, ...options };

	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			const img = entry.target;
			const src = img.getAttribute('data-lazy-src');

			if (entry.isIntersecting) {
				img.setAttribute('src', src);
				img.classList.add('loaded');

				observer.unobserve(target);
			}
		});
	}, defaultOptions);

	io.observe(target);
};

export default lazyLoad;
