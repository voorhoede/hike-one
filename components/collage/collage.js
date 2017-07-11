import React from 'react';

const Collage = ({ imageMedium, imageSmall, title = '', text = '' }) => {
	return (
		<section className="collage clearfix container">
			<div className="container-inner">
				<div className="collage-image-container">
					<img className="collage-image-medium" src={imageMedium} alt="" />
					<img className="collage-image-small shadow" src={imageSmall} alt="" />
				</div>
				<div className="collage-text-container">
					<h2 className="collage-text-title">{title}</h2>
					<p className="collage-text-description">{text}</p>
				</div>
			</div>
		</section>
	);
};

export default Collage;
