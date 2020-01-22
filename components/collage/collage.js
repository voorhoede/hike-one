import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const Collage = ({ imageMedium = '', imageSmall = '', title = '', text = '' }) => {
	const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 };

	const imageSmallTemplate = classes => {
		return (
			<img
				className={classes}
				srcSet={`
					${setImageParams(imageSmall, { ...imageParameters, w: 250 })}  250w,
					${setImageParams(imageSmall, { ...imageParameters, w: 580 })} 580w,
					${setImageParams(imageSmall, { ...imageParameters, w: 750 })} 750w,
					${setImageParams(imageSmall, { ...imageParameters, w: 1160 })} 1160w
				`}
				sizes="(max-width: 1480px) 50vw, 580px"
				src={imageSmall}
				alt=""
			/>
		);
	};

	return (
		<section className="collage clearfix container">
			<div className="collage-image-container">
				<div className="collage-image-container-inner">
					<img
						className="collage-image-medium"
						srcSet={`
							${setImageParams(imageMedium, { ...imageParameters, w: 250 })} 250w,
							${setImageParams(imageMedium, { ...imageParameters, w: 500 })} 500w,
							${setImageParams(imageMedium, { ...imageParameters, w: 740 })} 740w,
							${setImageParams(imageMedium, { ...imageParameters, w: 1000 })} 1000w,
							${setImageParams(imageMedium, { ...imageParameters, w: 1260 })} 1260w,
							${setImageParams(imageMedium, { ...imageParameters, w: 1480 })} 1480w
						`}
						sizes="
							(max-width: 768px) calc(100vw - 30px),
							(max-width: 1480px) 50vw,
							740px"
						src={imageMedium}
						alt=""
					/>

					{imageSmallTemplate('collage-image-small-hidden')}
				</div>
			</div>
			<div className="collage-text-container">
				<h2 className="collage-text-title">{title}</h2>
				<p className="collage-text-description" dangerouslySetInnerHTML={{ __html: text }} />
			</div>
		</section>
	);
};

Collage.propTypes = {
	imageMedium: PropTypes.string,
	imageSmall: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
};

export default Collage;
