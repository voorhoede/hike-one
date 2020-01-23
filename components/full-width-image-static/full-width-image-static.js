import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const imageParams = { fm: 'pjpg', q: 85 };

const FullWidthImageStatic = ({ image = '#', title = '', subtitle = '', index = 0 }) => {
	const style = {
		__html: `<style>
			.full-width-image-static-${index} {
				background-image: url('${setImageParams(image, { ...imageParams, w: 500 })}')
			}
			@media (min-width: 500px) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1000 })}')
				}
			}
			@media (min-width: 1170px) {
				.full-width-image-static-${index} {
					background-image: url('${setImageParams(image, { ...imageParams, w: 1920 })}')
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
