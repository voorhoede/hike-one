import React from 'react';
import { storiesOf } from '@storybook/react';
import UpdatesHeader from './updates-header';
import { withKnobs, text} from '@storybook/addon-knobs';

storiesOf('Updates header', module)
	.addDecorator(withKnobs)
	.add('updates header', () => (
		<UpdatesHeader
			title={text('Title', 'Updates')}/>
	));
