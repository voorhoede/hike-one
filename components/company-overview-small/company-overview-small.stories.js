import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import CompanyOverviewSmall from './company-overview-small';

const CompanyReferences = [
	{
		referenceText: 'We designed, build, tested and launched a global marketplace in 6 weeks',
		referenceCompanyLogo: {
			url: '../../static/images/ziggo.png'
		}
	},
	{
		referenceCaseLink: {
			slug: 'gone-in-60-seconds'
		},
		referenceText: 'We designed, build, tested and launched a global marketplace in 6 weeks',
		referenceCompanyLogo: {
			url: '../../static/images/ziggo.png'
		}
	},
	{
		referenceText: 'We designed, build, tested and launched a global marketplace in 6 weeks',
		referenceCompanyLogo: {
			url: '../../static/images/ziggo.png'
		}
	}
]

storiesOf('Company overview small', module)
	.addDecorator(withKnobs)
	.add('company overview small', () => (
		<CompanyOverviewSmall services={CompanyReferences} />
	));
