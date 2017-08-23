import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import ImageCompositionSmall from '../image-composition-small/image-composition-small';
import * as ImageCompositionSmallShapes from '../image-composition-small/image-composition-small-shapes';

import TeamImage3_4Data from '../../data/current/teamImages34.json';
import PeopleData from '../../data/current/people.json';
import TeamImage2_1Data from '../../data/current/teamImages21.json';

const workspace = {
	overlay: true,
	workspaceTitle: 'Our work space',

	statisticsSingle: {
		title:'Digital Fanatics',
		amount: 62,
		large: true
	},
	statisticsCombination: [
		{
			title:'Digital Designer',
			amount: 53
		},{
			title:'Project Mangers',
			amount: 8
		},{
			title:'Super Heroes',
			amount: 4
		}
	],
	workspaceOpenings: {
		title: 'See job openings',
		target: '#jobopenings'
	}
};

const listValues = {
	title: 'Our values', 
	values: [
		'Do what you love',
		'Find a way',
		'Be open and honest',
		'Get things done'
	]
}

storiesOf('Image composition large', module)
	.addDecorator(withKnobs)
	.add('3 items', () => (		
		<ImageCompositionSmall
			Person={PeopleData}
			TeamImage2_1={TeamImage2_1Data}
			TeamImage3_4={TeamImage3_4Data}>
			<ImageCompositionSmallShapes.variation1Front position="front"/>
			<ImageCompositionSmallShapes.variation1Back position="back"/>
		</ImageCompositionSmall>
	))
