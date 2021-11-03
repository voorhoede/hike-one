import React from 'react';
import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';
import InlineVideo from '../inline-video/inline-video';

const FiftyFifty = ({
	children,
	classes = '',
	contentLeft = false,
	googleMapsIframe = null,
	image = {},
	imageLarge = false,
	text = '',
	title = '',
	video = null,
}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find((child) => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find((child) => child.props.position === 'back');
	const imageLargeClass = imageLarge ? 'fifty-fifty-image-large' : '';
	const contentPosClass = contentLeft ? 'fifty-fifty-content-left' : '';
	const imageUrl = image && image.url;

	return (
		<section
			className={`fifty-fifty clearfix container ${classes} ${imageLargeClass} ${contentPosClass}`}
		>
			{parallaxLayerBack}
			<div className="container-inner">
				<div className="fifty-fifty-media">
					{googleMapsIframe && <div dangerouslySetInnerHTML={{ __html: googleMapsIframe }} />}

					{video && (
						<InlineVideo
							video={video}
							classes="content"
							autoplay={true}
							loop={true}
							mute={true}
							controls={false}
						/>
					)}

					{image && !imageLarge && (
						<img
							className="content"
							srcSet={`
								${setImageParams(imageUrl, { fit: 'max', w: 469 })} 469w,
								${setImageParams(imageUrl, { fit: 'max', w: 469, dpr: 2 })} 938w,
								${setImageParams(imageUrl, { fit: 'max', w: 595 })} 595w,
								${setImageParams(imageUrl, { fit: 'max', w: 595, dpr: 2 })} 1190w,
								${setImageParams(imageUrl, { fit: 'max', w: 727 })} 727w,
								${setImageParams(imageUrl, { fit: 'max', w: 727, dpr: 2 })} 1454w
							`}
							sizes="
								(max-width: 499px) calc(100vw - 30px),
								(max-width: 767px) calc(100vw - 40px),
								(min-width: 768px) calc(50vw - 20px),
								(min-width: 1024px) 50vw,
								595px"
							src={`${setImageParams(imageUrl, { fit: 'max', w: 727 })}`}
							alt=""
						/>
					)}

					{image && imageLarge && (
						<img
							className="content"
							srcSet={`
								${setImageParams(imageUrl, { fit: 'max', w: 469 })} 469w,
								${setImageParams(imageUrl, { fit: 'max', w: 469, dpr: 2 })} 938w,
								${setImageParams(imageUrl, { fit: 'max', w: 595 })} 595w,
								${setImageParams(imageUrl, { fit: 'max', w: 595, dpr: 2 })} 1190w,
								${setImageParams(imageUrl, { fit: 'max', w: 727 })} 727w,
								${setImageParams(imageUrl, { fit: 'max', w: 727, dpr: 2 })} 1454w
							`}
							sizes="
								(max-width: 499px) calc(100vw - 30px),
								(max-width: 767px) calc(100vw - 40px),
								(min-width: 768px) calc(50vw - 20px),
								(min-width: 1024px) 50vw,
								714px"
							src={`${setImageParams(imageUrl, { fit: 'max', w: 727 })}`}
							alt=""
						/>
					)}
				</div>

				<div className="fifty-fifty-content">
					{title && <h2 className="fifty-fifty-title content">{title}</h2>}

					<div className="fifty-fifty-text content" dangerouslySetInnerHTML={{ __html: text }} />
				</div>
			</div>

			{parallaxLayerFront}
		</section>
	);
};

FiftyFifty.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.node,
	contentLeft: PropTypes.bool,
	googleMapsIframe: PropTypes.string,
	image: PropTypes.object,
	imageLarge: PropTypes.bool,
	text: PropTypes.string,
	title: PropTypes.string,
	video: PropTypes.object,
};

export default FiftyFifty;
