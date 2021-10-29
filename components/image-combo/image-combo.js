import React from 'react';
import PropTypes from 'prop-types';

const ImageCombo = ({ hasText = false, children }) => {
	return (
		<div className={`image-combo ${hasText ? 'image-combo--has-text' : ''}`}>
			{children}
		</div>
	);
};

ImageCombo.propTypes = {
	hasText: PropTypes.bool,
	children: PropTypes.node,
};

export default ImageCombo;
