import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import BodyHeading from './body-heading';

storiesOf('Body heading', module)
	.addDecorator(withKnobs)
	.add('Body heading', () => (
		<BodyHeading
			title={text('title', 'Een update voor de grootste woning stie van Nederland')}/>
	));
