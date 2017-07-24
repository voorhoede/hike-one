import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Circle from './circle/circle';
import CircleBorder from './circle-border/circle-border';

const ShapeDecorator = (storyFn) => (
	<div style={{ margin: '10px', maxWidth: '90vmin', maxHeight: '90vmin' }}>
		{ storyFn() }
	</div>
);

storiesOf('Shapes', module)
	.addDecorator(withKnobs)
	.addDecorator(ShapeDecorator)
	.add('Circle', () => (
		<Circle shadow={ boolean('Shadow', false) } />
	))
	.add('CircleBorder', () => (
		<CircleBorder color={ select('Color', ['red', 'purple', 'blue', 'yellow', 'green', 'gray', 'dark-gray'], 'red') }
			classes={ text('Classes', '')} />
	))
