import React from 'react';

const TextCenter = ({classes, title = '', text = '', parallaxLayerBack, parallaxLayerFront }) => (
	<section className={`${classes ? classes : ''} text-center container`}>
		{parallaxLayerBack}
		<div className="container-inner">
			{ title
				? <h2 className="content">{title}</h2>
				: '' }
			<p className="content">{text}</p>
		</div>
		{parallaxLayerFront}
	</section>
);

export default TextCenter;
