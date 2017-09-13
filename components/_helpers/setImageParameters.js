function setImageParams(imageUrl, params){
	const querString = Object.keys(params).reduce((acc, item, index, array) => {	
		const amp = array.length - 1 === index ? ' ' : '&';
		return `${acc}${item}=${params[item]}${amp}`;
	}, '') 
	
	return `${imageUrl}${querString}`;
}

export default setImageParams;