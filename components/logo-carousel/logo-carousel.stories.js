import React from 'react';
import { storiesOf } from '@storybook/react';
import LogoCarousel from './logo-carousel';
import Data from '../../data/current/work.json';

storiesOf('Logo carousel', module)
	.add('logo carousel', () => (
		<LogoCarousel title={Data.companiesTitle}  animationSpeed={Data.animationSpeed} companies={Data.companies} />
	));
