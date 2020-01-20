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
	headerImageLarger = false,
	imagePositionCenter = false,
}) => {
	const headerImageClass = `${headerImageLarger ? 'image-large' : ''} ${
		imagePositionCenter ? 'position-center' : ''
	}`;
	const style = {
		__html: `<style>
			.full-width-header-image {
				background-image: url('${setImageParams(headerImage, { fit: 'max', w: 1000 })}')
			}
			@media (min-width: 768px) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { fit: 'max', w: 1500 })}')
				}
			}
			@media (min-width: 1170px) {
				.full-width-header-image {
					background-image: url('${setImageParams(headerImage, { fit: 'max', w: 2000 })}')
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
								<Icon icon="arrowLeft" classes="icon" />
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
	headerImageLarger: PropTypes.bool,
	imagePositionCenter: PropTypes.bool,
};

export default FullWidthHeader;
