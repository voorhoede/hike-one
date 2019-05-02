import React from 'react';
import { storiesOf } from '@storybook/react';
import Data from '../../data/current/component-guide.json';
import TeamImage from './team-image';

const teamImageData = Data.components.find(item => item.itemType === 'team_image_3_4');

storiesOf('Team image', module)
  .add('default', () => (
    <TeamImage
      image={teamImageData.photo.url}
      title={text('title', teamImageData.title)}>
    </TeamImage>
    ()  ));
