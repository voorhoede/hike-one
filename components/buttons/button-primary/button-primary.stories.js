import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';

import PrimaryButton from '../button-primary/button-primary';
import PrimaryButtonLink from '../button-primary/button-primary-link';

const ButtonDecorator = (storyFn) => (
	<div style={{ margin: '10px' }}>
		{ storyFn() }
	</div>
);

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.addDecorator(ButtonDecorator)
	.add('Primary button', () => {
		const colorOptions = {
			'btn-red': 'red',
			'': 'default',
		};

		const colorValue = select('Color', colorOptions, '');
		const textValue = text('Button Text', 'Primary Button');
		const largeValue = boolean('Large', false);
		const largeClass = largeValue ? 'btn-large' : '';
		const isLinkValue = boolean('As Link', false);

		return (
			<div>
				{!isLinkValue &&
					<PrimaryButton onClick={ action('clicked')} classes={`${colorValue} ${largeClass}`}>
						{ textValue }
					</PrimaryButton>
				}
				{isLinkValue &&
					<PrimaryButtonLink href="#" classes={`${colorValue} ${largeClass}`}>
						{ textValue }
					</PrimaryButtonLink>
				}
			</div>
		);
	});

