import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import OfficeCard from './office-card';

const location = 'Amsterdam';
const address = 'Rijnsburgstraat 9-11';
const postcode = '1059AT';
const city = 'Amsterdam';
const imageUrl = 'https://www.datocms-assets.com/2625/1505293468-img_case-copy-2.png?';


storiesOf('Office card', module)
	.addDecorator(withKnobs)
	.add('tab selector', () => (
		<div className="office-card-wrapper" style={{'max-width': '300px'}}>
			<OfficeCard
				location={location}
				address={address}
				postcode={postcode}
				city={city}
				imageUrl={imageUrl} />
		</div>
	));

