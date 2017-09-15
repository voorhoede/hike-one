import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import TeamImage from './team-image';

const TeamImage9_16DummyData = {
	title: 'Crafting our company bike',
	photo: {
		url: 'https://www.datocms-assets.com/2625/1503415605-header-grafity-kopie1491834535inline.jpg?'
	}
};

storiesOf('Team image', module)
	.addDecorator(withKnobs)
	.add('9 16', () => (
		<TeamImage
			image={TeamImage9_16DummyData.photo.url}
			title={text('title', TeamImage9_16DummyData.title)}> 
		</TeamImage>
	));
