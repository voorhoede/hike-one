function setImageParams(imageUrl, params) {
	const defaults = '?auto=format,compress&';
	const querString = Object.keys(params).reduce((acc, item, index, array) => {
		const amp = array.length - 1 === index ? ' ' : '&';
		return `${acc}${item}=${params[item]}${amp}`;
	}, '');
	const url = `${imageUrl}${defaults}${querString}`;
	return url.trim();
}

export default setImageParams;
