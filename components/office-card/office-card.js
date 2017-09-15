import React from 'react';

import Icon from '../icon/icon';

const OfficeCard = ({
	location = '',
	address = '',
	postcode = '',
	city = '',
	country = '',
	imageUrl = ''}) => {

	let mapsUrl;

	if(location === 'Amsterdam') {
		mapsUrl = 'https://www.google.nl/maps/place/Rijnsburgstraat+9,+1059+AT+Amsterdam/@52.3475182,4.8482701,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5e21d502d2d59:0x908032e046a111ed!8m2!3d52.3475182!4d4.8504641';
	} else if (location === 'Rotterdam') {
		mapsUrl = 'https://www.google.nl/maps/place/Schiedamsedijk+40,+3011+ED+Rotterdam/@51.9164886,4.4793697,17z/data=!3m1!4b1!4m5!3m4!1s0x47c4335e409d88e7:0xd4933742911020ec!8m2!3d51.9164886!4d4.4815637';
	} else {
		mapsUrl = 'https://www.google.nl/maps/place/Igluu+Eindhoven/@51.440653,5.4720493,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6d91b28155555:0x489358288c7baa01!8m2!3d51.440653!4d5.474238';
	}

	return (
		<div className="office-card">
			<a href={mapsUrl} target="_blank">
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
