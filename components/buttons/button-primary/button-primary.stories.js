import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';

import ButtonPrimary from '../button-primary/button-primary';
import ButtonPrimaryLink from '../button-primary/button-primary-link';
import ButtonPrimaryMock from '../button-primary/button-primary-mock';

const ButtonDecorator = (storyFn) => (
	<div style={{ margin: '10px' }}>
		{ storyFn() }
	</div>
);

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.addDecorator(ButtonDecorator)
	.add('Button Primary', () => {
		const textValue = text('Button Text', 'Primary Button');
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
				<ButtonPrimary onClick={ action('clicked')} classes={largeClass} icon={icon}>
					{ textValue }
				</ButtonPrimary>
				}
				{type === 'link' &&
				<ButtonPrimaryLink href="#" classes={largeClass} icon={icon}>
					{ textValue }
				</ButtonPrimaryLink>
				}
				{type === 'mock' &&
				<ButtonPrimaryMock classes={largeClass} icon={icon}>
					{ textValue }
				</ButtonPrimaryMock>
				}
			</div>
		);
	});

