import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import CompanyOverviewSmall from './company-overview-small';
import GuideData from '../../data/current/component-guide.json'

// const CompanyReferences = [
// 	{
// 		referenceText: 'We designed, build, tested and launched a global marketplace in 6 weeks',
// 		referenceCompanyLogo: {
// 			url: 'https://www.datocms-assets.com/2625/1504268600-olx.png?'
// 		}
// 	},
// 	{
// 		referenceCaseLink: {
// 			slug: 'gone-in-60-seconds'
// 		},
// 		referenceText: 'We designed, build, tested and launched a global marketplace in 6 weeks',
// 		referenceCompanyLogo: {
// 			url: 'https://www.datocms-assets.com/2625/1504268600-olx.png?'
// 		}
// 	},
// 	{
// 		referenceText: 'We designed, build, tested and launched a global marketplace in 6 weeks',
// 		referenceCompanyLogo: {
// 			url: 'https://www.datocms-assets.com/2625/1504268600-olx.png?'
// 		}
// 	}
// ]

storiesOf('Company overview small', module)
	.addDecorator(withKnobs)
	.add('company overview small', () => (
		<CompanyOverviewSmall services={[GuideData.components.companies]} />
	));
