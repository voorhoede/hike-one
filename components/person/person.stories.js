import React from 'react';
import { storiesOf } from '@storybook/react';
import Person from '../person/person';
import Data from '../../data/current/component-guide.json';

storiesOf('Person', module)
	.add('Person', () => (
		<Person />
	));
