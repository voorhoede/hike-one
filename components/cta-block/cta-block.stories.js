import React from 'react';
import { storiesOf } from '@storybook/react';

import CTABlock from './cta-block';

storiesOf('CTA Block', module)
	.add('...', () => (
		<CTABlock
			title="We make technology work for humans."
			button="Get to know us"
			/>
	));
