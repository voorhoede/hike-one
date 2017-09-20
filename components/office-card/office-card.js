import React from 'react';

import Icon from '../icon/icon';
import setImageParams from '../_helpers/setImageParameters';

const OfficeCard = ({
	index,
	location = '',
	address = '',
	postcode = '',
	city = '',
	country = '',
	locationUrl = '',
	imageUrl = ''}) => {

	const imageParameters = { fit: 'crop', fm: 'jpg', q: 85 };

	const style ={__html:
		`<style>
			.office-card .office-image-${index} {
				background-image: url("${setImageParams(imageUrl, { ...imageParameters, w: 465, h:259 })}");
			}

			@media only screen and (min-width: 500px) {
				.office-card:first-child .office-image-${index} {
					background-image: url("${setImageParams(imageUrl, { ...imageParameters, w: 550, h:200 })}");
				}
			}

			@media only screen and (min-width: 768px) {
				.office-card .office-image-${index},
				.office-card:first-child .office-image-${index} {
					background-image: url("${setImageParams(imageUrl, { ...imageParameters, w: 310, h:320 })}");
				}
			}

			@media only screen and (min-width: 1024px) {
				.office-card .office-image-${index},
				.office-card:first-child .office-image-${index} {
					background-image: url("${setImageParams(imageUrl, { ...imageParameters, w: 380, h:491 })}");
				}
			}
		</style>`};

	return (
		<div className="office-card">
			<a href={locationUrl} target="_blank">
				<div className="office-card-image">
					<div className={`image office-image-${index}`}></div>
				</div>

				<div className="office-card-text">
					<h2>{location}</h2>

					<div className="office-card-address">
						<span>{address}</span>
						<span>{postcode} {city}</span>
						<span>{country}</span>
					</div>

					<div className="office-card-button">
						<Icon icon="arrowRight" />
					</div>
				</div>
			</a>

			<div dangerouslySetInnerHTML={style}></div>
		</div>
	);
};

export default OfficeCard;
