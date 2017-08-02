import React from 'react';

const FiftyFifty = ({classes = '', image, title = '', text = '', noshadow, children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	return (
		<section className={`fifty-fifty clearfix container ${classes}`}>
			{parallaxLayerBack}
			<div className="container-inner">
				<div className="fifty-fifty-image">
					<img className={`content ${noshadow ? 'no-shadow' : 'shadow-low-opacity'}` } src={image} alt="" />
				</div>
				<div className="fifty-fifty-content">
					<h2 className="fifty-fifty-title content">{title}</h2>
					<p className="fifty-fifty-text content">{text}</p>
				</div>
			</div>
			{parallaxLayerFront}
		</section>
	);
};

export default FiftyFifty;
