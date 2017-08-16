import React from 'react';
import { storiesOf } from '@storybook/react';

import Data from '../../data/current/component-guide.json';
import TeamImage2_1 from '../team-image-2-1/team-image-2-1';

const item = Data.teamImage21;

storiesOf('Team image 2:1', module)
	.add('Team image 2:1', () => (
		<TeamImage2_1 image={item} />
	));
