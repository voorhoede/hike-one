import React from 'react'

const ImageCombo = ({classes, children}) => {
	const childrenArray = React.Children.toArray(children);
	const childrenRest = childrenArray.filter(child => child.props.position !== 'front' || child.props.position !== 'back');
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');

	return (
		<div className={`${classes ? classes : '' } image-combo` }>
			{ childrenRest }
			{ parallaxLayerFront }
		</div>
	);
};

export default ImageCombo;
