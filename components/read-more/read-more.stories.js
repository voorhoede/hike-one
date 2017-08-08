import React from 'react';
import { storiesOf } from '@storybook/react';
import ReadMore from '../read-more/read-more';


storiesOf('Read More', module)
	.add('Read More', () => (
		<ReadMore
			highlight={{
				"image": "/static/images/img-vbh.jpg",
				"title": "VBH Pivot App",
				"href": "#",
				"linkLabel": "View case"
			}}
			links={[
				{
					"title": "Your  first Design Sprint: do these 3 things first",
					"subtext": "24 November 2016 | Matthijs Collard & Martijn Pillich"
				},
				{
					"title": "In 5 days from sketch to tested prototype with Design Sprints",
					"subtext": "17 November 2016 | Ingmar Coenen"
				}
			]} />
	));
