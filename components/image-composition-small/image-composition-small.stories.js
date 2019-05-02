import React from 'react';
import { storiesOf } from '@storybook/react';
import Data from '../../data/current/component-guide.json';
import ImageCompositionSmall from '../image-composition-small/image-composition-small';
import * as ImageCompositionSmallShapes from '../image-composition-small/image-composition-small-shapes';

const teamImage21 = Data.image

storiesOf('Image composition small', module)
  .add('default', () => (
    <ImageCompositionSmall
      image21={Data.teamImage21}
      image34={Data.teamImage34}
      image34Small={Data.teamImage34} >
      <ImageCompositionSmallShapes.variation1Front position="front"/>
      <ImageCompositionSmallShapes.variation1Back position="back"/>
    </ImageCompositionSmall>
  ));
