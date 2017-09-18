import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeaderLarge from './page-header-large';
import { withKnobs, text} from '@storybook/addon-knobs';

storiesOf('Page Header Large', module)
	.addDecorator(withKnobs)
	.add('Large', () => (
		<PageHeaderLarge
		video={''}
		title={text('Title', '100% Digital Product Design')}
		subtitle={text('Subtitle', `We are Hike One. 50+ digital product design specialists. We guide you to new and better products. Let's go!`)}
		image={'https://www.datocms-assets.com/2625/1504163227-hike-one-background.jpg?'} />
	));
