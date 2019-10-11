const setComponentCounter = (counter, itemType, layerMap) => {
	const counterItem = counter[itemType];
	const layerMapItem = layerMap[itemType];

	// check if there is a corresponding itemType in the layerMap
	if (!layerMapItem) {
		counter[itemType] = null;
		// check if there is a variation for the component count in the layerMap
	} else if (counterItem !== null && layerMapItem[counterItem + 1]) {
		counter[itemType] = counterItem + 1;
		// if not then set the counter back to 0, so that the first variation is used of the layerMap
	} else {
		counter[itemType] = 0;
	}

	return counter;
};

export default setComponentCounter;
