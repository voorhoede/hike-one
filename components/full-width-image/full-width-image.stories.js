import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Data from '../../data/current/component-guide.json';
import FullWidthImage from '../full-width-image/full-width-image';

const item = Data.components.find(item => item.itemType === 'full_width_image')

storiesOf('Full width images', module)
	.addDecorator(withKnobs)
	.add('full width images with text', () => (
			<FullWidthImage
				image={item.image.url}
				title={text('title', item.title)}
				subtitle={text('subtitle',item.subtitle)} />
	))
