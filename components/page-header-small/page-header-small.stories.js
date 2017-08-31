import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeaderSmall from './page-header-small';
import { withKnobs, text} from '@storybook/addon-knobs';

storiesOf('Page header small', module)
	.addDecorator(withKnobs)
	.add('Page header small', () => (
		<PageHeaderSmall
			title={text('Title', 'Updates')}/>
	));
