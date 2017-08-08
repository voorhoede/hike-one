import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';

import ButtonSecondary from '../button-secondary/button-secondary';
import ButtonSecondaryLink from '../button-secondary/button-secondary-link';
import ButtonSecondaryMock from '../button-secondary/button-secondary-mock';

const ButtonDecorator = (storyFn) => (
	<div style={{ padding: '10px', background: '#00aae9', height: '100vh'}}>
		{ storyFn() }
	</div>
);

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.addDecorator(ButtonDecorator)
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

		return (
			<div>
				{type === 'button' &&
				<ButtonSecondary onClick={ action('clicked')} classes={largeClass} icon={icon}>
					{ textValue }
				</ButtonSecondary>
				}
				{type === 'link' &&
				<ButtonSecondaryLink  href="#" classes={largeClass} icon={icon}>
					{ textValue }
				</ButtonSecondaryLink>
				}
				{type === 'mock' &&
				<ButtonSecondaryMock classes={largeClass} icon={icon}>
					{ textValue }
				</ButtonSecondaryMock>
				}
			</div>
		);
	});

