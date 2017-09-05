function getDateFormat(date){
	const oldDate = new Date(date);
	const options = {
		day: "numeric",
		year: "numeric",
		month: "long"
	};
	const newDateFormat = oldDate.toLocaleDateString("en-us", options).replace(/,/g,'');	
	
	return newDateFormat;
}

export default getDateFormat;
