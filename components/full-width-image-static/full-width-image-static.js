import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const FullWidthImageStatic = ({ image = '', title = '', subtitle = '', index = 0 }) => {
	const imageParams = { fit: 'max' };
	const style = {
		__html: `<style>
			@media (max-width: 767px) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 768, h: 600 })}')
				}
			}
			@media (max-width: 767px) and (min-resolution: 192dpi) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 768, h: 600, dpr: 2 })}')
				}
			}
			@media (min-width: 768px) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1170, h: 700 })}')
				}
			}
			@media (min-width: 768px) and (min-resolution: 192dpi) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1170, h: 700, dpr: 2 })}')
				}
			}
			@media (min-width: 1170px) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1440, h: 800 })}')
				}
			}
			@media (min-width: 1170px) and (min-resolution: 192dpi) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1440, h: 800, dpr: 2 })}')
				}
			}
			@media (min-width: 1440px) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1920, h: 800 })}')
				}
			}
			@media (min-width: 1440px) and (min-resolution: 192dpi) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1920, h: 800, dpr: 2 })}')
				}
			}
		</style>`,
	};

	return (
		<div>
			<div dangerouslySetInnerHTML={style} />
			<div className={`full-width-image-static full-width-image-static-${index}`}>
				{(title || subtitle) && (
					<div className="full-width-image-static-text">
						{title && <h2>{title}</h2>}
						{subtitle && <p>{subtitle}</p>}
					</div>
				)}
			</div>
		</div>
	);
};

FullWidthImageStatic.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	index: PropTypes.number,
};

export default FullWidthImageStatic;
