import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PrimaryButton from './button-primary/button-primary';
import PrimaryButtonLink from './button-primary/button-primary-link';

const ButtonDecorator = (storyFn) => (
	<div style={{ margin: '10px' }}>
		{ storyFn() }
	</div>
);

storiesOf('Buttons', module)
	.addDecorator(ButtonDecorator)
	.add('Primary button', () => (
		<PrimaryButton onClick={ action('clicked') }>Primary button</PrimaryButton>
	))
	.add('Primary link', () => (
		<PrimaryButtonLink href="#" value="Primary link"></PrimaryButtonLink>
	))
	.add('Secondary button', () => (
		<div>etc</div>
	))
	.add('Secondary link', () => (
		<div>etc</div>
	));
