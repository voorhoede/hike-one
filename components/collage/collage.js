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
				<img className="collage-image-medium"
					 srcSet={`
					 	${imageMedium}&auto=format&fm=jpg&fit=max&q90&w=250 250w,
						${imageMedium}&auto=format&fm=jpg&fit=max&q90&w=500 500w,
						${imageMedium}&auto=format&fm=jpg&fit=max&q90&w=740 740w,
						${imageMedium}&auto=format&fm=jpg&fit=max&q90&w=1000 1000w,
						${imageMedium}&auto=format&fm=jpg&fit=max&q90&w=1260 1260w,
						${imageMedium}&auto=format&fm=jpg&fit=max&q90&w=1480 1480w `}
					 sizes="
					 	(max-width: 768px) calc(100vw - 30px),
					 	(max-width: 1480px) 50vw,
					 	740px"
					 src={imageMedium} alt="" />
				<Parallax speed="1.1">
					<img className="collage-image-small shadow-low-opacity"
						 srcSet={`
							${imageSmall}&auto=format&fm=jpg&fit=max&q90&w=250 250w,
							${imageSmall}&auto=format&fm=jpg&fit=max&q90&w=580 580w,
							${imageSmall}&auto=format&fm=jpg&fit=max&q90&w=750 750w,
							${imageSmall}&auto=format&fm=jpg&fit=max&q90&w=1160 1160w`}
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
