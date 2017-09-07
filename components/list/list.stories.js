import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './list';


const listData = [
	'item 1',
	'item 2',
	'item 3'
]

storiesOf('List', module)
	.add('default', () => (
		<List items={listData}/>
	));
