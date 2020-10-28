const scrollToElement = (elementClass) => {
	document.querySelector(`.${elementClass}`).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};

export default scrollToElement;
