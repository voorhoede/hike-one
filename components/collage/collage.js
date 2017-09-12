import React from 'react';
import Parallax from '../parallax/parallax';
import setImageParams from '../_helpers/setImageParameters';

const Collage = ({ imageMedium, imageSmall, title = '', text = '', children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	const imageParameters = { fit: 'max', fm: 'jpg', q: 90 }

	return (
		<section className="collage clearfix container">
			{parallaxLayerBack}
			<div className="collage-image-container">
				<img className="collage-image-medium"
					 srcSet={`
						 ${setImageParams(imageMedium, { ...imageParameters, w: 250 } )},
						 ${setImageParams(imageMedium, { ...imageParameters, w: 500 } )},
						 ${setImageParams(imageMedium, { ...imageParameters, w: 740 } )},
						 ${setImageParams(imageMedium, { ...imageParameters, w: 1000 } )},
						 ${setImageParams(imageMedium, { ...imageParameters, w: 1260 } )},
						 ${setImageParams(imageMedium, { ...imageParameters, w: 1480 } )},
					 	`}
					 sizes="
					 	(max-width: 768px) calc(100vw - 30px),
					 	(max-width: 1480px) 50vw,
					 	740px"
					 src={imageMedium} alt="" />
				<Parallax speed="1.1">
					<img className="collage-image-small shadow-low-opacity"
						 srcSet={`
							 ${setImageParams(imageSmall, { ...imageParameters, w: 250 } )},
							 ${setImageParams(imageSmall, { ...imageParameters, w: 580 } )},
							 ${setImageParams(imageSmall, { ...imageParameters, w: 750 } )},
							 ${setImageParams(imageSmall, { ...imageParameters, w: 1160 } )}
							`}
						 sizes="
							(max-width: 1480px) 50vw,
							580px"
						 src={imageSmall}
						 alt="" />
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
