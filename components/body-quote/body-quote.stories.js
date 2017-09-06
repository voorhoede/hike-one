import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import BodyQuote from './body-quote';

storiesOf('Body quote', module)
	.addDecorator(withKnobs)
	.add('Body quote', () => (
		<BodyQuote
			quote={text('quote', '“How can the interaction with a smart lock system make the sharing of access to the house flexible for a B&B host?”')}/>
	));
