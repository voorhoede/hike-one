import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import CompanyOverviewSmall from './company-overview-small';
// TODO add correct endpoint for company ref
import DataService from '../../data/current/home.json';

storiesOf('Company overview small', module)
	.addDecorator(withKnobs)
	.add('company overview small', () => (
		<CompanyOverviewSmall services={DataService.serviceItems} />
	));
