const getParallaxVariationCount = (counter, itemType, layerMap) => {
	const counterItem = counter[itemType];
	const layerMapItem = layerMap[itemType];

	if (!layerMapItem) {
		return null;
	}

	return counterItem && layerMapItem[counterItem + 1]
		? counterItem + 1
		: 0;
};

export default getParallaxVariationCount;
