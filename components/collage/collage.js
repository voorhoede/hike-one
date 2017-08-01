import React from 'react';
import Parallax from '../parallax/parallax';

const Collage = ({ imageMedium, imageSmall, title = '', text = '', children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	return (
		<section className="collage clearfix container">
			{parallaxLayerBack}
			<div className="collage-image-container">
				<img className="collage-image-medium" src={imageMedium} alt="" />
				<Parallax speed="1.1">
					<img className="collage-image-small shadow-low-opacity" src={imageSmall} alt="" />
				</Parallax>
			</div>
			<div className="collage-text-container">
				<h2 className="collage-text-title">{title}</h2>
				<p className="collage-text-description">{text}</p>
			</div>
			{parallaxLayerFront}
		</section>
	);
};


export default Collage;
