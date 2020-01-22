import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';
import InlineVideo from '../inline-video/inline-video';

const FiftyFifty = ({
	classes = '',
	contentLeft = false,
	googleMapsIframe = null,
	image = {},
	imageLarge = false,
	text = '',
	title = '',
	video = null,
}) => {
	const imageLargeClass = imageLarge ? 'fifty-fifty-image-large' : '';
	const contentPosClass = contentLeft ? 'fifty-fifty-content-left' : '';
	const imageUrl = image && image.url;

	return (
		<section
			className={`fifty-fifty clearfix container ${classes} ${imageLargeClass} ${contentPosClass}`}
		>
			<div className="container-inner">
				<div className="fifty-fifty-media">
					{googleMapsIframe && <div dangerouslySetInnerHTML={{ __html: googleMapsIframe }} />}

					{video && (
						<InlineVideo video={video} autoplay={true} loop={true} mute={true} controls={false} />
					)}

					{image && !imageLarge && (
						<img
							srcSet={`
								${setImageParams(imageUrl, { fit: 'max', w: 250 })} 250w,
								${setImageParams(imageUrl, { fit: 'max', w: 500 })} 500w,
								${setImageParams(imageUrl, { fit: 'max', w: 630 })} 630w,
								${setImageParams(imageUrl, { fit: 'max', w: 750 })} 750w,
								${setImageParams(imageUrl, { fit: 'max', w: 1000 })} 1000w,
								${setImageParams(imageUrl, { fit: 'max', w: 1260 })} 1260w,
								${setImageParams(imageUrl, { fit: 'max', w: 1400 })} 1400w
							`}
							sizes="
								(max-width: 768px) calc(100vw - 30px),
								(max-width: 1024px) calc(50vw - 50px),
								(max-width: 1244px) calc(50vw - 30px),
								630px"
							src={`${setImageParams(imageUrl, { fit: 'max', w: 750 })} 750w,`}
							alt=""
						/>
					)}

					{image && imageLarge && (
						<img
							srcSet={`
								${setImageParams(imageUrl, { fit: 'max', w: 250 })} 250w,
								${setImageParams(imageUrl, { fit: 'max', w: 500 })} 500w,
								${setImageParams(imageUrl, { fit: 'max', w: 715 })} 715w,
								${setImageParams(imageUrl, { fit: 'max', w: 750 })} 750w,
								${setImageParams(imageUrl, { fit: 'max', w: 1000 })} 1000w,
								${setImageParams(imageUrl, { fit: 'max', w: 1200 })} 1200w,
								${setImageParams(imageUrl, { fit: 'max', w: 1430 })} 1430w
							`}
							sizes="
								(max-width: 768px) calc(100vw - 30px),
								(max-width: 1024px) calc(60vw - 50px),
								(max-width: 1244px) calc(60vw - 30px),
								715px"
							src={`${setImageParams(imageUrl, { fit: 'max', w: 750 })}`}
							alt=""
						/>
					)}
				</div>

				<div className="fifty-fifty-content">
					{title && <h2 className="fifty-fifty-title">{title}</h2>}

					<div className="fifty-fifty-text" dangerouslySetInnerHTML={{ __html: text }} />
				</div>
			</div>
		</section>
	);
};

FiftyFifty.propTypes = {
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
