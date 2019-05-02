import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialShare from './social-share';

storiesOf('Social share', module)
  .add('default', () => (
    <SocialShare
      facebookLink={'#'}
      linkedinLink={'#'}
      twitterLink={'#'} />
  ));
