function setImageParams(imageUrl, params){
	const querString = Object.keys(params).reduce((acc, item, index) => {	
		return `${acc}${item}=${params[item]}&`;
	}, '') 
	
	return `${imageUrl}${querString}`;
}

export default setImageParams;