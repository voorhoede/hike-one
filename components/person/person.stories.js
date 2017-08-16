import React from 'react';
import { storiesOf } from '@storybook/react';
import Data from '../../data/current/component-guide.json';
import Person from '../person/person';

const item = Data.person;

storiesOf('Person', module)
	.add('Person', () => (
		<Person image={item}/>
	));
