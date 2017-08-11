import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import FiftyFifty from '../50-50/50-50';

import Data from '../../data/current/component-guide.json';
const data = Data.components.find(item => item.itemType === '50_50_text_left');

storiesOf('50-50', module)
	.addDecorator(withKnobs)
	.add('50-50 text right', () => {
		return (
			<FiftyFifty
				title={data.title}
				text={data.text}
				image={data.image.url}>
			</FiftyFifty>
		);
	})
	.add('30-50 text right', () => {
		return (
			<FiftyFifty
				classes="fifty-fifty-text-small"
				title={data.title}
				text={data.text}
				image={data.image.url}>
			</FiftyFifty>
		);
	})
	.add('50-50 text left', () => {
		return (
			<FiftyFifty
				classes="fifty-fifty-content-left"
				title={data.title}
				text={data.text}
				image={data.image.url}>
			</FiftyFifty>
		);
	})
	.add('30-50 text left', () => {
		return (
			<FiftyFifty
				classes="fifty-fifty-content-left fifty-fifty-text-small"
				title={data.title}
				text={data.text}
				image={data.image.url}>
			</FiftyFifty>
		);
	});

