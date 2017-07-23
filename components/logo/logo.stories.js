import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from './logo';

const LogoDecorator = (storyFn) => (
	<div style={{ margin: '10px' }}>
		{ storyFn() }
	</div>
);

storiesOf('Logo', module)
	.addDecorator(LogoDecorator)
	.add('Black', () => (
		<Logo color="black" />
	));
