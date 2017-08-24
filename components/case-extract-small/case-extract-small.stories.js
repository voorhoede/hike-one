import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import CaseExtractSmall from './case-extract-small';
import * as CaseExtractSmallShapes from './case-extract-small-shapes';

const caseItem = {
	color: 'blue',
	companyName: 'Sita',
	title: 'Gone in 60 seconds',
	subtitle: 'Een update voor de grootste woning stie van Nederland',
	slug: 'gone-in-60-seconds',
	headerBackgroundImage: {
		url: 'https://www.datocms-assets.com/2625/1500551495-drop-fly-header.jpg?'
	}
}

storiesOf('Case extract small', module)
	.addDecorator(withKnobs)
	.add('Extract small', () => (
		<div className="case-extract-small-container">
			<CaseExtractSmall item={caseItem}>
				<CaseExtractSmallShapes.variation1Front position="front"/>
			</CaseExtractSmall>
		</div>
	));
