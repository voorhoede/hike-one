import React from 'react';
import setImageParams from '../_helpers/setImageParameters';

const FiftyFifty = ({classes = '', image, title = '', text = '', children, imageLarge, contentLeft}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	const imageLargeClass = imageLarge ? 'fifty-fifty-image-large' : '';
	const contentPosClass = contentLeft ? 'fifty-fifty-content-left': '';
	const imageParameters = { fit: 'max', fm: 'jpg', q: '90' }

	return (
		<section className={`fifty-fifty clearfix container ${classes} ${imageLargeClass} ${contentPosClass}`}>
			{parallaxLayerBack}
			<div className="container-inner">
				<div className="fifty-fifty-image">
					{!imageLarge &&
					<img className="content"
						 srcSet={`
							 ${setImageParams(image, { ...imageParameters, w: 250 } )} 250w,
							 ${setImageParams(image, { ...imageParameters, w: 500 } )} 500w,
							 ${setImageParams(image, { ...imageParameters, w: 630 } )} 630w,
							 ${setImageParams(image, { ...imageParameters, w: 750 } )} 750w,
							 ${setImageParams(image, { ...imageParameters, w: 1000 } )} 1000w,
							 ${setImageParams(image, { ...imageParameters, w: 1260 } )} 1260w,
							 ${setImageParams(image, { ...imageParameters, w: 1400 } )} 1400w
						 `}
						 sizes="
							(max-width: 768px) calc(100vw - 30px),
							(max-width: 1024px) calc(50vw - 50px),
							(max-width: 1244px) calc(50vw - 30px),
							630px"
						 src={`${setImageParams(image, { ...imageParameters, w: 750 } )} 750w,`}
						 alt="" />
					}
					{imageLarge &&
					<img className="content"
						 srcSet={`
							${setImageParams(image, { ...imageParameters, w: 250 } )} 250w,
							${setImageParams(image, { ...imageParameters, w: 500 } )} 500w,
							${setImageParams(image, { ...imageParameters, w: 715 } )} 715w,
							${setImageParams(image, { ...imageParameters, w: 750 } )} 750w,
							${setImageParams(image, { ...imageParameters, w: 1000 } )} 1000w,
							${setImageParams(image, { ...imageParameters, w: 1200 } )} 1200w,
							${setImageParams(image, { ...imageParameters, w: 1430 } )} 1430w
						 `}
						 sizes="
							(max-width: 768px) calc(100vw - 30px),
							(max-width: 1024px) calc(60vw - 50px),
							(max-width: 1244px) calc(60vw - 30px),
							715px"
						 src={`${setImageParams(image, { ...imageParameters, w: 750 } )}`}
						 alt="" />
					}
				</div>
				<div className="fifty-fifty-content">
					<h2 className="fifty-fifty-title content">{title}</h2>
					<p className="fifty-fifty-text content" dangerouslySetInnerHTML={{__html: text}}></p>
				</div>
			</div>
			{parallaxLayerFront}
		</section>
	);
};

export default FiftyFifty;
