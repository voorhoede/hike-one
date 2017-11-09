import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import FiftyFifty from '../50-50/50-50';

import Data from '../../data/current/component-guide.json';
const data = Data.components.find(item => item.itemType === '50_50_text_left');

storiesOf('50-50', module)
	.addDecorator(withKnobs)
	.add('50-50 text right', () => {
		return (
			<FiftyFifty
				title={text('title', data.title)}
				text={text('text', data.text)}
				image={data.image.url}>
			</FiftyFifty>
		);
	})
	.add('40-60 text right', () => {
		return (
			<FiftyFifty
				title={text('title', data.title)}
				text={text('text', data.text)}
				imageLarge="true"
				image={data.image.url}>
			</FiftyFifty>
		);
	})
	.add('50-50 text left', () => {
		return (
			<FiftyFifty
				title={text('title', data.title)}
				text={text('text', data.text)}
				contentLeft="true"
				image={data.image.url}>
			</FiftyFifty>
		);
	})
	.add('40-60 text left', () => {
		return (
			<FiftyFifty
				title={text('title', data.title)}
				text={text('text', data.text)}
				contentLeft="true"
				imageLarge="true"
				image={data.image.url}>
			</FiftyFifty>
		);
	});

