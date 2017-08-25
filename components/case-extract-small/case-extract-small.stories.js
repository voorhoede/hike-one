import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import CaseExtractSmall from './case-extract-small';

storiesOf('Case extract small', module)
	.addDecorator(withKnobs)
	.add('Extract small', () => (
		<div className="case-extract-small-container">
			<CaseExtractSmall
				color="blue"
				companyname="Sita"
				title="Gone in 60 seconds"
				slug="#"
				image={{url: 'https://www.datocms-assets.com/2625/1500551495-drop-fly-header.jpg?'}}
				subtitle={text('Subtitle', 'Een update voor de grootste woning stie van Nederland')}>
			</CaseExtractSmall>
		</div>
	));
