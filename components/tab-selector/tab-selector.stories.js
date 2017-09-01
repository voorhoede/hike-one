import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import TabSelector from './tab-selector';

const productData = {
	title: 'New product design',
	color: 'blue',
	target: '#newproductdesign'
}

const designData = {
	title: 'UX / UI Design',
	color: 'green',
	target: '#design'
}

const trainingData = {
	title: 'Training & Academy',
	color: 'purple',
	target: '#training'
}

storiesOf('Tab selector', module)
	.addDecorator(withKnobs)
	.add('tab selector', () => (
		<TabSelector 
			product={productData}
			design={designData}
			training={trainingData}/>
	));
