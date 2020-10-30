import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const FullWidthImageSmall = ({ image = '', index = 0 }) => {
	const imageParams = { fit: 'crop' };
	const style = {
		__html: `<style>
			@media (max-width: 499px) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 500, h: 214 })}')
				}
			}
			@media (max-width: 499px) and (-webkit-min-device-pixel-ratio: 2),
			@media (max-width: 499px) and (min-resolution: 192dpi) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 500, h: 214, dpr: 2 })}')
				}
			}
			@media (min-width: 500px) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 768, h: 300 })}')
				}
			}
			@media (min-width: 500px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 500px) and (min-resolution: 192dpi) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 768, h: 300, dpr: 2 })}')
				}
			}
			@media (min-width: 768px) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1170, h: 400 })}')
				}
			}
			@media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 768px) and (min-resolution: 192dpi) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1170, h: 400, dpr: 2 })}')
				}
			}
			@media (min-width: 1170px) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1440, h: 610 })}')
				}
			}
			@media (min-width: 1170px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 1170px) and (min-resolution: 192dpi) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1440, h: 610, dpr: 2 })}')
				}
			}
			@media (min-width: 1440px) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1920, h: 610 })}')
				}
			}
			@media (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 1440px) and (min-resolution: 192dpi) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1920, h: 610, dpr: 2 })}')
				}
			}
			@media (min-width: 1920px) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 2500, h: 610 })}')
				}
			}
			@media (min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 1920px) and (min-resolution: 192dpi) {
				.full-width-image-small-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 2500, h: 610, dpr: 2 })}')
				}
			}
		</style>`,
	};

	return (
		<div>
			<div dangerouslySetInnerHTML={style} />
			<div className={`full-width-image-small full-width-image-small-${index}`} />
		</div>
	);
};

FullWidthImageSmall.propTypes = {
	image: PropTypes.string,
	index: PropTypes.number,
};

export default FullWidthImageSmall;
