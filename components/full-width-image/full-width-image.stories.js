import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';

import Data from '../../data/current/component-guide.json';
import FullWidthImage from '../full-width-image/full-width-image';

const item = Data.components.find(item => item.itemType === 'full_width_image');

storiesOf('Full width image', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<FullWidthImage
			image={item.image.url}
			title={text('title', item.title)}
			subtitle={text('subtitle', item.subtitle)}/>
));
