import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './footer';

storiesOf('Footer', module)
  .add('footer', () => (
    <Footer
      callToActionLabel="Up for a new challenge? Join us!"
      callToActionUrl="http://werkenbij.unitid.nl"
    ></Footer>
  ));
