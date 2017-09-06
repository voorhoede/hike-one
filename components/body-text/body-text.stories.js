import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import BodyText from './body-text';

storiesOf('Body text', module)
	.addDecorator(withKnobs)
	.add('Body text', () => (
		<BodyText
			text={text('title', 'Een update voor de grootste woning stie van Nederland')}/>
	));
