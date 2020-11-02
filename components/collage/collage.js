import React from 'react';
import PropTypes from 'prop-types';
import Parallax from '../parallax/parallax';

import setImageParams from '../_helpers/setImageParameters';

const Collage = ({ imageMedium = '', imageSmall = '', title = '', text = '', children }) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find((child) => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find((child) => child.props.position === 'back');
	const imageParameters = { fit: 'max' };

	const imageSmallTemplate = (classes) => {
		return (
			<img
				className={classes}
				srcSet={`
					${setImageParams(imageSmall, { ...imageParameters, w: 510 })}  510w,
					${setImageParams(imageSmall, { ...imageParameters, w: 510, dpr: 2 })} 1020w
				`}
				sizes="
					(max-width: 1023px) 50vw,
					(min-width: 1024px) 510px"
				src={`${setImageParams(imageSmall, { ...imageParameters, w: 580 })}`}
				alt=""
			/>
		);
	};

	return (
		<section className="collage clearfix container">
			{parallaxLayerBack}
			<div className="collage-image-container">
				<div className="collage-image-container-inner">
					<img
						className="collage-image-medium"
						srcSet={`
							${setImageParams(imageMedium, { ...imageParameters, w: 469 })} 469w,
							${setImageParams(imageMedium, { ...imageParameters, w: 469, dpr: 2 })} 938w,
							${setImageParams(imageMedium, { ...imageParameters, w: 551 })} 551w,
							${setImageParams(imageMedium, { ...imageParameters, w: 551, dpr: 2 })} 1102w,
							${setImageParams(imageMedium, { ...imageParameters, w: 698 })} 698w,
							${setImageParams(imageMedium, { ...imageParameters, w: 698, dpr: 2 })} 1396w,
							${setImageParams(imageMedium, { ...imageParameters, w: 718 })} 718w,
							${setImageParams(imageMedium, { ...imageParameters, w: 718, dpr: 2 })} 1436w
						`}
						sizes="
							(max-width: 499px) calc(100vw - 30px),
							(max-width: 767px) 698px,
							(max-width: 1023px) 50vw,
							(max-width: 1439px) 50vw,
							718px"
						src={`${setImageParams(imageMedium, { ...imageParameters, w: 740 })}`}
						alt=""
					/>

					{imageSmallTemplate('collage-image-small-hidden')}

					<Parallax speed="1.1">
						{imageSmallTemplate('collage-image-small shadow-low-opacity')}
					</Parallax>
				</div>
			</div>
			<div className="collage-text-container">
				<h2 className="collage-text-title content">{title}</h2>
				<p
					className="collage-text-description content"
					dangerouslySetInnerHTML={{ __html: text }}
				/>
			</div>
			{parallaxLayerFront}
		</section>
	);
};

Collage.propTypes = {
	imageMedium: PropTypes.string,
	imageSmall: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.node,
};

export default Collage;
