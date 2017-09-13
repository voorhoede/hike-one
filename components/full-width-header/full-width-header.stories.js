import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import FullWidthHeader from './full-width-header';

const header = {
	headerImage: { 
		url: '../../static/images/img-header.jpg'
	},
	color: {
		hex: '#11374a'
	},
	author : {
		name: 'Jesse Eikema' 
	},
	date: '2017-09-14',
	title: 'Designing a better user experience for a smart lock system'
}

storiesOf('Full width header', module)
	.addDecorator(withKnobs)
	.add('full width header with text', () => (
			<FullWidthHeader
				color={header.color.hex} 
				title={header.title}
				authorName={header.author.name} 
				updatedDate={header.date} />
	))
