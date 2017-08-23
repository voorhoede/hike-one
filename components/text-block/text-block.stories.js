import React from 'react';
import { storiesOf } from '@storybook/react';
import TextBlock from '../text-block/text-block';

const listValues = {
	title: 'Our values', 
	values: [
		'Do what you love',
		'Find a way',
		'Be open and honest',
		'Get things done'
	]
}


storiesOf('text block', module)
	.add('list text block', () => (
		<TextBlock
			color='blue'
			alignment='text-block-right'
			size='text-block-small'
			listValues={listValues} />		
	));