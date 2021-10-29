import React from 'react';
import PropTypes from 'prop-types';

const TextCenter = ({ classes = '', title = '', text = '' }) => {
	return (
		<section className={`${classes} text-center container`}>
			<div className="container-inner content">
				{title && <h2 className="text-center-title">{title}</h2>}
				<div className="text-center-text" dangerouslySetInnerHTML={{ __html: text }} />
			</div>
		</section>
	);
};

TextCenter.propTypes = {
	classes: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.node,
};

export default TextCenter;
