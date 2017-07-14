import React from 'react';

const CaseTextCenter = ({classes, title = '', text = '', parallaxLayerBack}) => {
	return (
		<section className={`${classes ? classes : ''} case-text-center container`}>
			{parallaxLayerBack}
			<div className="container-inner">
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</section>
	);
};

export default CaseTextCenter;
