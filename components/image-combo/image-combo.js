const ImageCombo = ({classes, children, parallaxLayerFront}) => {
	return (
		<div className={`${classes ? classes : '' } image-combo` }>
			{ children }
			{ parallaxLayerFront }
		</div>
	);
};

export default ImageCombo;
