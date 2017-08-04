import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';

import SecondaryButton from '../button-secondary/button-secondary';
import SecondaryButtonLink from '../button-secondary/button-secondary-link';

const ButtonDecorator = (storyFn) => (
	<div style={{ padding: '10px', background: '#00aae9', height: '100vh'}}>
		{ storyFn() }
	</div>
);

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.addDecorator(ButtonDecorator)
	.add('Secondary button', () => {
		const textValue = text('Button Text', 'Secondary Button');
		const isLinkValue = boolean('As Link', false);
		const withIcon = boolean('With Icon', false);
		const icon = withIcon ? 'arrowRight' : null;

		return (
			<div>
				{!isLinkValue &&
				<SecondaryButton onClick={ action('clicked')} icon={icon}>
					{ textValue }
				</SecondaryButton>
				}
				{isLinkValue &&
				<SecondaryButtonLink href="#" icon={icon}>
					{ textValue }
				</SecondaryButtonLink>
				}
			</div>
		);
	});

