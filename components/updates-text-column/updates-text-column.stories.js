import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';

import UpdatesTextColumn from './updates-text-column';
import UpdatesTextOverview from '../updates-text-overview/updates-text-overview';

storiesOf('Update extract text', module)
	.addDecorator(withKnobs)
	.add('update extract text small', () => (
		<UpdatesTextOverview>
		<UpdatesTextColumn
			links={[
				{
					"title": "Your  first Design Sprint: do these 3 things first",
					"subtext": "24 November 2016 | Matthijs Collard & Martijn Pillich"
				},
				{
					"title": "In 5 days from sketch to tested prototype with Design Sprints",
					"subtext": "17 November 2016 | Ingmar Coenen"
				},
			]} />
		<UpdatesTextColumn
			links={[
				{
					"title": "Your  first Design Sprint: do these 3 things first",
					"subtext": "24 November 2016 | Matthijs Collard & Martijn Pillich"
				},
				{
					"title": "In 5 days from sketch to tested prototype with Design Sprints",
					"subtext": "17 November 2016 | Ingmar Coenen"
				},
			]} />
	</UpdatesTextOverview>
	));
