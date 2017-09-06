import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import InlineImage from './inline-image';

const inlineImage = {
	url: 'https://www.datocms-assets.com/2625/1504595643-1502810186-1500560684-bitmap.png?',
	caption: 'This is an large inline image with caption'
}

storiesOf('inline image', module)
	.addDecorator(withKnobs)	
	.add('default', () => (
		<InlineImage image={text('imgsrc', inlineImage.url)} caption={text('caption', 'Een update voor de grootste woning stie van Nederland')}/>
	));
