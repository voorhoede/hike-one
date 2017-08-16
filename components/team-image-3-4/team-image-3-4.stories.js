import React from 'react';
import { storiesOf } from '@storybook/react';

import Data from '../../data/current/component-guide.json';
import TeamImage3_4 from '../team-image-3-4/team-image-3-4';

const item = Data.teamImage34;

storiesOf('Team image 3:4', module)
	.add('Team image 3:4', () => (
		<TeamImage3_4 image={item} />
	));
