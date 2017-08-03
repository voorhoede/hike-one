import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PrimaryButton from './button-primary/button-primary';
import PrimaryButtonLink from './button-primary/button-primary-link';
import SecondaryButton from './button-secondary/button-secondary';
import SecondaryButtonLink from './button-secondary/button-secondary-link';

const ButtonDecorator = (storyFn) => (
	<div style={{ margin: '10px' }}>
		{ storyFn() }
	</div>
);

storiesOf('Buttons', module)
	.addDecorator(ButtonDecorator)
	.add('Primary button', () => (
		<PrimaryButton onClick={ action('clicked') } value="Primary Button"/>
	))
	.add('Primary link', () => (
		<PrimaryButtonLink href="#" value="Primary link" />
	))
	.add('Secondary button', () => (
		<SecondaryButton onClick= {action('clicked')} value="Secondary Button" />
	))
	.add('Secondary link', () => (
		<SecondaryButtonLink href="#" value="Secondary Link" />
	));
