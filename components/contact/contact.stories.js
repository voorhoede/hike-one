import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import Contact from './contact';
import * as ContactShapes from './contact-shapes';

storiesOf('Contact', module)
  .addDecorator(withKnobs)
  .add('contact', () => (
    <Contact
      title={text('Title', 'Where will your journey lead us')}
      button={text('Button', 'Get in touch')} >
      <ContactShapes.variation1Front position="front" />
    </Contact>
  ));
