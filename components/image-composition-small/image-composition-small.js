import React from 'react';
import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const ImageCompositionSmall = ({
	children,
	classes = '',
	image21 = {},
	image34 = {},
	image34Small = {},
}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find((child) => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find((child) => child.props.position === 'back');
	const imageParameters = { fit: 'max' };

	return (
		<div className={`image-composition-small ${classes}`}>
			{parallaxLayerBack}
			<div className="image-composition-small-inner">
				<div className="image-composition-img-1 image-team">
					<img
						srcSet={`
							${setImageParams(image21.photo.url, { ...imageParameters, w: 320 })} 320w,
							${setImageParams(image21.photo.url, { ...imageParameters, w: 375 })} 375w,
							${setImageParams(image21.photo.url, { ...imageParameters, w: 453 })} 453w,
							${setImageParams(image21.photo.url, { ...imageParameters, w: 600 })} 600w,
							${setImageParams(image21.photo.url, { ...imageParameters, w: 906 })} 906w
						`}
						sizes={`
							(max-width: 768px) calc(50vw - 30px),
							(max-width: 1024px) calc(50vw - 80px),
							453px
						`}
						src={`${setImageParams(image21.photo.url, { ...imageParameters })}`}
						alt=""
						className="image-team-img"
					/>
					<span className="image-team-title">{image21.title}</span>
				</div>

				<div className="image-composition-img-2 image-team">
					<img
						srcSet={`
							${setImageParams(image34.photo.url, { ...imageParameters, w: 320 })} 320w,
							${setImageParams(image34.photo.url, { ...imageParameters, w: 375 })} 375w,
							${setImageParams(image34.photo.url, { ...imageParameters, w: 453 })} 453w,
							${setImageParams(image34.photo.url, { ...imageParameters, w: 600 })} 600w,
							${setImageParams(image34.photo.url, { ...imageParameters, w: 906 })} 906w
						`}
						sizes={`
							(max-width: 768px) calc(50vw - 30px),
							(max-width: 1024px) calc(50vw - 80px),
							453px
						`}
						src={`${setImageParams(image34.photo.url, { ...imageParameters })}`}
						alt=""
						className="image-team-img"
					/>
					<span className="image-team-title">{image34.title}</span>
				</div>

				<div className="image-composition-img-3 image-team">
					<img
						srcSet={`
							${setImageParams(image34Small.photo.url, { ...imageParameters, w: 165 })} 165w,
							${setImageParams(image34Small.photo.url, { ...imageParameters, w: 329 })} 329w,
							${setImageParams(image34Small.photo.url, { ...imageParameters, w: 660 })} 660w
						`}
						sizes={`
							(max-width: 768px) calc(50vw - 30px),
							(max-width: 1024px) calc(50vw - 80px),
							329px
						`}
						src={`${setImageParams(image34Small.photo.url, {
							...imageParameters,
						})}`}
						alt=""
						className="image-team-img"
					/>
					<span className="image-team-title">{image34Small.title}</span>
				</div>
			</div>

			{parallaxLayerFront}
		</div>
	);
};

ImageCompositionSmall.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.string,
	image21: PropTypes.object,
	image34: PropTypes.object,
	image34Small: PropTypes.object,
	image34SmallPerson: PropTypes.bool,
};

export default ImageCompositionSmall;
