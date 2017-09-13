import React from 'react';

import Icon from '../icon/icon';

const OfficeCard = ({
	location = '',
	address = '',
	postcode = '',
	city = '',
	imageUrl = ''}) => {

	const mapsSearchQuery = `https://www.google.com/maps/search/?api=1&query=${address + ", " + postcode + ", " + city}`;

	return (
		<div className="office-card">
			<a href={mapsSearchQuery}>
				<div className="office-card-image">
					<div className="image"
						 style={{backgroundImage: `url(${imageUrl})`}}></div>
				</div>

				<div className="office-card-text">
					<h2>{location}</h2>

					<div className="office-card-address">
						<span>{address}</span>
						<span>{postcode} {city}</span>
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
