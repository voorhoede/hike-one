import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';
import LogoCarousel from './logo-carousel';
import Data from '../../data/current/component-guide.json';

const logoCarouselData = Data.components.find(item => item.itemType === 'logo_carousel');

storiesOf('Logo carousel', module)
  .addDecorator(withKnobs)
  .add('logo carousel', () => (
    <LogoCarousel
      title={text('title', logoCarouselData.title)}
      animationSpeed={logoCarouselData.animationSpeed}
      companies={logoCarouselData.companies} />
  ));
