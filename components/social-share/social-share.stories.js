import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import SocialShare from './social-share';
import Facebook   from '../icons/facebook-circle';
import Twitter 	  from '../icons/twitter-circle';
import LinkedIn   from '../icons/linkedin-circle';

storiesOf('Social share', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<SocialShare 
			facebookLink={'#'}
			linkedinLink={'#'}
			twitterLink={'#'}
		/>
	));
