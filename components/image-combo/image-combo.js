import React from 'react';
import PropTypes from 'prop-types';

const ImageCombo = ({ hasText = false, children }) => {
	const childrenArray = React.Children.toArray(children);
	const childrenRest = childrenArray.filter(
		(child) => child.props.position !== 'front' || child.props.position !== 'back'
	);
	const parallaxLayerFront = childrenArray.find((child) => child.props.position === 'front');

	return (
		<div className={`image-combo ${hasText ? 'image-combo--has-text' : ''}`}>
			{childrenRest}
			{parallaxLayerFront}
		</div>
	);
};

ImageCombo.propTypes = {
	hasText: PropTypes.bool,
	children: PropTypes.node,
};

export default ImageCombo;
