import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import setImageParams from '../_helpers/setImageParameters';

const OfficeCard = ({
	index = 0,
	location = '',
	address = '',
	postcode = '',
	city = '',
	country = '',
	locationUrl = '',
	imageUrl = '',
}) => {
	const imageParams = { fit: 'crop' };
	const style = {
		__html: `<style>
			.office-card .office-image-${index} {
				background-image: url('${setImageParams(imageUrl, { ...imageParams, w: 465, h: 259 })}')
			}
			@media (min-width: 500px) {
				.office-card:first-child .office-image-${index} {
					background-image: url('${setImageParams(imageUrl, { ...imageParams, w: 550, h: 200 })}')
				}
			}
			@media (min-width: 768px) {
				.office-card .office-image-${index},
				.office-card:first-child .office-image-${index} {
					background-image: url('${setImageParams(imageUrl, { ...imageParams, w: 310, h: 320 })}')
				}
			}
			@media (min-width: 1024px) {
				.office-card .office-image-${index},
				.office-card:first-child .office-image-${index} {
					background-image: url('${setImageParams(imageUrl, { ...imageParams, w: 380, h: 491 })}')
				}
			}
		</style>`,
	};

	return (
		<div className="office-card">
			<a href={locationUrl} target="_blank" rel="noopener noreferrer">
				<div className="office-card-image">
					<div className={`image office-image-${index}`} />
				</div>

				<div className="office-card-text">
					<h3>{location}</h3>

					<div className="office-card-address">
						<span>{address}</span>
						<span>
							{postcode} {city}
						</span>
						<span>{country}</span>
					</div>

					<div className="office-card-button">
						<Icon icon="arrowRight" />
					</div>
				</div>
			</a>

			<div dangerouslySetInnerHTML={style} />
		</div>
	);
};

OfficeCard.propTypes = {
	index: PropTypes.number,
	location: PropTypes.string,
	address: PropTypes.string,
	postcode: PropTypes.string,
	city: PropTypes.string,
	country: PropTypes.string,
	locationUrl: PropTypes.string,
	imageUrl: PropTypes.string,
};

export default OfficeCard;
