import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import Author from './author';
const Data = {
	author: {
		name: 'Jesse Eikema',
		role: 'Frontend Developer',
		photo: {url: 'https://www.datocms-assets.com/2625/1504595643-1502810186-1500560684-bitmap.png?'},
		summary: 'This is the author summary'
	}
};

storiesOf('Author', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Author
			name={text('name', Data.author.name)}
			role={Data.author.role}
			photoUrl={Data.author.photo.url}
			summary={ text('summary',Data.author.summary)}
		/>
	));
