export default (elementClass) => {
	document.querySelector(`.${elementClass}`).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};
