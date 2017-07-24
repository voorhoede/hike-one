import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import TextCard from './text-card';

const CardDecorator = (storyFn) => (
	<div style={{ margin: '10px' }}>
		{ storyFn() }
	</div>
);

storiesOf('TextCard', module)
	.addDecorator(withKnobs)
	.addDecorator(CardDecorator)
	.add('title & text', () => (
		<TextCard title={ text('Title', 'Card title') } text={ text('Text', 'Text on the card can be longer.') } />
	));
