import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';

import ButtonClean from './button-clean';
import ButtonCleanLink from './button-clean-link';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('Button Clean', () => {
		const colorOptions = {
			'btn-red': 'red',
			'': 'default',
		};

		const colorValue = select('Color', colorOptions, '');
		const backgroundColor = colorValue === '' ? '#00aae9' : '';
		const textValue = text('Button Text', 'Button Clea');
		const withIcon = boolean('With Icon', false);
		const isLinkValue = boolean('As Link', false);
		const icon = withIcon ? 'arrowRight' : null;

		const backgroundStyles = {
			padding: '10px',
			background: backgroundColor,
			height: '100vh'
		};

		return (
			<div style={backgroundStyles}>
				{!isLinkValue &&
				<ButtonClean onClick={ action('clicked')} icon={icon} classes={colorValue}>
					{ textValue }
				</ButtonClean>
				}
				{isLinkValue &&
				<ButtonCleanLink href="#" icon={icon} classes={colorValue}>
					{ textValue }
				</ButtonCleanLink>
				}
			</div>
		);
	});

