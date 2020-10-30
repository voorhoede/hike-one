import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../icon/icon';
import getDateFormat from '../_helpers/getDateFormat';
import setImageParams from '../_helpers/setImageParameters';

const FullWidthHeader = ({
	headerImage = '',
	color = '',
	title = '',
	authorName = '',
	updatedDate = '',
	titleOnly = false,
	imagePositionCenter = false,
}) => {
	const imageParams = { fit: 'max' };
	const headerImageClass = `${imagePositionCenter ? 'position-center' : ''}`;
	const style = {
		__html: `<style>
			@media (max-width: 767px) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 768 })}')
				}
			}
			@media (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
			@media (max-width: 767px) and (min-resolution: 192dpi) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 768, dpr: 2 })}')
				}
			}
			@media (min-width: 768px) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 1170 })}')
				}
			}
			@media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 768px) and (min-resolution: 192dpi) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 1170, dpr: 2 })}')
				}
			}
			@media (min-width: 1170px) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 1440 })}')
				}
			}
			@media (min-width: 1170px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 1170px) and (min-resolution: 192dpi) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 1440, dpr: 2 })}')
				}
			}
			@media (min-width: 1440px) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 1920 })}')
				}
			}
			@media (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 1440px) and (min-resolution: 192dpi) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 1920, dpr: 2 })}')
				}
			}
			@media (min-width: 1920px) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 2500 })}')
				}
			}
			@media (min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2),
			@media (min-width: 1920px) and (min-resolution: 192dpi) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { ...imageParams, w: 2500, dpr: 2 })}')
				}
			}
		</style>`,
	};

	return (
		<div className="full-width-header">
			<div dangerouslySetInnerHTML={style} />
			<div className={`full-width-header-image ${headerImageClass}`} />
			<div className="full-width-header-banner" style={{ backgroundColor: `${color}` }}>
				<div className="full-width-header-back" style={{ backgroundColor: `${color}` }}>
					{!titleOnly && (
						<Link href="/updates">
							<a className="full-width-header-link">
								<Icon icon="arrowLeft" />
								<span className="full-width-header-subtitle">all updates</span>
							</a>
						</Link>
					)}
				</div>
				<div className="full-width-header-content" style={{ backgroundColor: `${color}` }}>
					<h1 className="full-width-header-title">{title}</h1>
					{!titleOnly && (
						<span className="full-width-header-author">
							{authorName} - {getDateFormat(updatedDate)}
						</span>
					)}
				</div>
				<div></div> {/* Do not remove, creates left spacing */}
			</div>
		</div>
	);
};

FullWidthHeader.propTypes = {
	headerImage: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string,
	authorName: PropTypes.string,
	updatedDate: PropTypes.string,
	titleOnly: PropTypes.bool,
	imagePositionCenter: PropTypes.bool,
};

export default FullWidthHeader;
