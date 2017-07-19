import React from 'react';

const TextCenter = ({classes, title = '', text = '', parallaxLayerBack, parallaxLayerFront }) => {
	return (
		<section className={`${classes ? classes : ''} text-center container`}>
			{parallaxLayerBack}
			<div className="container-inner">
				{ title
					? <h2>{title}</h2>
					: '' }
				<p>{text}</p>
			</div>
			{parallaxLayerFront}
		</section>
	);
};

export default TextCenter;
