import React from 'react';

import Icon from '../icon/icon';

const OfficeCard = ({
	location = '',
	address = '',
	postcode = '',
	city = '',
	country = '',
	locationUrl = '',
	imageUrl = ''}) => {

	let mapsUrl;

	return (
		<div className="office-card">
			<a href={locationUrl} target="_blank">
				<div className="office-card-image">
					<div className="image"
						 style={{backgroundImage: `url(${imageUrl})`}}></div>
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
		</div>
	);
};

export default OfficeCard;
