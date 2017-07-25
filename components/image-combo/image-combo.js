const ImageCombo = ({classes, children, parallaxLayerFront}) => (
	<div className={`${classes ? classes : '' } image-combo` }>
		{ children }
		{ parallaxLayerFront }
	</div>
);


export default ImageCombo;
