import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Data from '../../data/current/component-guide.json'
import FullWidthImageSmall from './full-width-image-small'

const item = Data.components.find(item => item.itemType === 'full_width_image')

storiesOf('Full width image small', module)
  .addDecorator(withKnobs)
  .add('default', () => (
      <FullWidthImageSmall
        image={item.image.url} />
  ))
