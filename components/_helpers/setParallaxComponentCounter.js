const setComponentCounter = (counter, itemType, layerMap) => {
	const counterItem = counter[itemType];
	const layerMapItem = layerMap[itemType];

	if (!layerMapItem) {
		counter[itemType] = null;
	} else if (counterItem !== null && layerMapItem[counterItem + 1]) {
		counter[itemType] = counterItem + 1;
	} else {
		counter[itemType] = 0;
	}

	return counter;
};

export default setComponentCounter;
