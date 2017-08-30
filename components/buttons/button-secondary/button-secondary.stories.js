import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';

import ButtonSecondary from '../button-secondary/button-secondary';
import ButtonSecondaryLink from '../button-secondary/button-secondary-link';
import ButtonSecondaryMock from '../button-secondary/button-secondary-mock';

const ButtonDecorator = (storyFn) => (
	<div style={{ padding: '10px', backgroundColor: '#00aae9', height: '100vh'}} className="js-background">
		{ storyFn() }
	</div>
);

storiesOf('Buttons', module)
	.addDecorator(withKnobs)
	.addDecorator(ButtonDecorator)
	.add('Button Secondary', () => {
		const textValue = text('Button Text', 'Secondary Button');
		const largeValue = boolean('Large', false);
		const largeClass = largeValue ? 'btn-large' : '';
		const withIcon = boolean('With Icon', false);
		const icon = withIcon ? 'arrowRight' : null;
		const types = {
			'button': 'button',
			'link': 'link',
			'mock': 'mock'
		};
		const type = select('Type', types, 'button');

		let disabled = false;
		if (type === 'button') {
			disabled = boolean('Disabled', false);
		}

		const colorOptions = {
			'btn-red': 'red',
			'btn-red-border': 'red border',
			'btn-purple': 'purple',
			'btn-green': 'green',
			'': 'default',
		};

		const backgroundColors = {
			'btn-red': '#fe595b',
			'btn-red-border': '#fff',
			'btn-purple': '#8314bb',
			'btn-green': '#45d33c',
			'': '#00aae9'
		};

		const colorClass = select('Color', colorOptions, '');
		const classes = `${colorClass} ${largeClass}`;
		const backgroundColor = backgroundColors[colorClass];
		const wrapper = document.querySelector('.js-background');
		if (wrapper) {
			wrapper.style.backgroundColor = backgroundColor;
		}

		return (
			<div>
				{type === 'button' &&
				<ButtonSecondary onClick={ action('clicked')} classes={classes} icon={icon} disabled={disabled}>
					{ textValue }
				</ButtonSecondary>
				}
				{type === 'link' &&
				<ButtonSecondaryLink  href="#" classes={classes} icon={icon}>
					{ textValue }
				</ButtonSecondaryLink>
				}
				{type === 'mock' &&
				<ButtonSecondaryMock classes={classes} icon={icon}>
					{ textValue }
				</ButtonSecondaryMock>
				}
			</div>
		);
	});

