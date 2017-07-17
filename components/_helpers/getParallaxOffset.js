const getParallaxOffset = (speed, windowHeight, scrolledHeight, elementRect) => {
	const bottomScreen = windowHeight + scrolledHeight;
	const elementTop = elementRect.top + window.pageYOffset;
	const elementBottom = elementRect.bottom + window.pageYOffset;
	const elementHalf = elementRect.height / 2;
	const windowHalf = windowHeight / 2;

	if (elementTop > (bottomScreen)) {
		// element below viewport
		return -((elementHalf + windowHalf) * speed);

	} else if (elementBottom < scrolledHeight) {
		// element above viewport
		return (elementHalf + windowHalf) * speed;
	} else  {
		// element is partial in view
		const viewportMiddle = scrolledHeight + windowHalf;
		const elementMiddle = elementTop + elementHalf;

		// how far is element middle from viewportMiddle
		const elementFromMiddle = elementMiddle - viewportMiddle;

		if (elementFromMiddle > 0) {
			// element middle under middle of the viewport
			return -((elementFromMiddle) * speed);
		} else {
			// element middle over middle of the viewport
			return ((-elementFromMiddle) * speed);
		}
	}
};

export default getParallaxOffset;
