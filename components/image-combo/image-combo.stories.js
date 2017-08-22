import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Data from '../../data/current/component-guide.json';
import QuoteBlock from '../quote-block/quote-block';
import StatisticsBlock from '../statistics-block/statistics-block';
import TextCard from '../text-card/text-card';
import ImageCombo from '../image-combo/image-combo';
import FullWidthImage from '../full-width-image/full-width-image';

const workspace = {
	overlay: true,
	workspaceTitle: 'Our work space',

	statisticsSingle: {
		title:'Digital Fanatics',
		amount: 62,
		large: true
	},
	statisticsCombination: [
		{
			title:'Digital Designer',
			amount: 53
		},{
			title:'Project Mangers',
			amount: 8
		},{
			title:'Super Heroes',
			amount: 4
		}
	],
	workspaceOpenings: {
		title: 'See job openings',
		target: '#jobopenings'
	}
};

const item = Data.components.find(item => item.itemType === 'image_combo');

storiesOf('Image Combo', module)
	.addDecorator(withKnobs)
	.add('with text card', () => (
		<ImageCombo classes={ item.textTitle ? 'image-combo-text': ''} >
			<TextCard  title={ text('Title', item.textTitle) } text={text('Text content', item.textContent)} />
			<FullWidthImage image={item.image.url} />
			<QuoteBlock
				color={select('Color', ['purple', 'blue', 'green'], item.quoteColor.color) }
				alignment={select('Alignment', ['text-block-right', 'text-block-left'], item.quoteAlignLeft)}
				quote={text('Quote', item.quote)}
				citeName={text('Author name', item.quoteAuthorName)}
				citeTitle={text('Author title', item.quoteAuthorTitle)}
				citeImage={item.quoteAuthorImage.url} />
		</ImageCombo>
	))
	.add('without text card', () => (
		<ImageCombo>
			<FullWidthImage image={item.image.url} />
			<QuoteBlock
				color={select('Color', ['purple', 'blue', 'green'], item.quoteColor.color) }
				alignment={select('Alignment', ['text-block-right', 'text-block-left'], item.quoteAlignLeft)}
				quote={text('Quote', item.quote)}
				citeName={text('Author name', item.quoteAuthorName)}
				citeTitle={text('Author title', item.quoteAuthorTitle)}
				citeImage={item.quoteAuthorImage.url} />
		</ImageCombo>
	))
	.add('with statistics', () => (
		<ImageCombo>
			<FullWidthImage image={item.image.url} />
			<StatisticsBlock
				color={select('Color', ['purple', 'blue', 'green'], item.quoteColor.color) }
				alignment={select('Alignment', ['text-block-right', 'text-block-left'], item.quoteAlignLeft)}
				statisticsSingle={workspace.statisticsSingle}
				statisticsCombination={workspace.statisticsCombination}
				jobOpenings={workspace.workspaceOpenings} />
		</ImageCombo>
	))
