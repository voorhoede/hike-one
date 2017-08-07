import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Data from '../../data/current/componentGuide/componentGuide.json';
import QuoteBlock from './quote-block';
import TextCard from '../text-card/text-card';
import ImageCombo from '../image-combo/image-combo';
import FullWidthImage from '../full-width-image/full-width-image';

const item = Data.components.find(item => item.itemType === 'image_combo')

const quoteBlockDecorator = (storyFn) => (
	<div style={{ margin: '10px' }}>
		{ storyFn() }
	</div>
);

storiesOf('Quote block', module)
	.addDecorator(quoteBlockDecorator)
	.addDecorator(withKnobs)
	.add('with text card', () => (
		<ImageCombo classes={ item.textTitle ? 'image-combo-text': ''} >
			<TextCard title={ text('Title', item.textTitle) } text={text('Text content', item.textContent)} />
			<FullWidthImage image={item.image.url} />
			<QuoteBlock
				color={select('Color', ['purple', 'blue', 'green'], item.quoteColor.color) }
				alignment={select('Alignment', ['quote-block-left', 'quote-block-right'], item.quoteAlignLeft)}
				quote={text('Quote', item.quote)}
				citeName={text('Author name', item.quoteAuthorName)}
				citeTitle={text('Author title', item.quoteAuthorTitle)}
				citeImage={item.quoteAuthorImage.url} />
		</ImageCombo>
	))