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
					<img className={`content ${noshadow ? 'no-shadow' : 'shadow-low-opacity'}` }
						 srcSet={`
						 	${image}&auto=format&fit=max&q90&w=250 250w,
						 	${image}&auto=format&fit=max&q90&w=500 500w,
						 	${image}&auto=format&fit=max&q90&w=630 630w,
							${image}&auto=format&fit=max&q90&w=750 750w,
							${image}&auto=format&fit=max&q90&w=1000 1000w,
							${image}&auto=format&fit=max&q90&w=1260 1260w,
							${image}&auto=format&fit=max&q90&w=1400 1400w
						 `}
						 sizes="
							(max-width: 768px) calc(100vw - 30px),
							(max-width: 1024px) calc(50vw - 50px),
							(max-width: 1244px) calc(50vw - 30px),
							630px"
						 src={`${image}&auto=format&q=90&w=750`}
						 alt="" />
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
