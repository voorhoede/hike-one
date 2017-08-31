import React from 'react';
import { storiesOf } from '@storybook/react';
import ServicesOverviewSmall from '../services-overview-small/services-overview-small';
import Data from '../../data/current/home.json';

storiesOf('Service item small', module)
	.add('service item small', () => (
		<ServicesOverviewSmall title={Data.servicesItemTitle}  services={Data.serviceItems} />
	));
