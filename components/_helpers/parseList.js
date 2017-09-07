function parseList(items){
	const newArray = [];
	// create new list on linelinebreaks
	items = items.replace(/\n/g, ',');
	items = items.split(',');
	Object.values(items).map((item, index) => {	
		//check if nog an empty string
		if(item){
			// replace astriks
			if(item.startsWith('*')){
				item = item.replace(/\* /g, '');
				newArray.push(item);
			} else {
				newArray.push(item);
			}
		}
	});
	return newArray;
}

export default parseList;