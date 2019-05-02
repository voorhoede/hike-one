import React from 'react'
import { storiesOf } from '@storybook/react'

import Data from '../../data/current/component-guide.json'
import FullWidthImageStatic from './full-width-image-static'

const item = Data.components.find(item => item.itemType === 'full_width_image')

storiesOf('Full width image static', module)
  .add('default', () => (
    <FullWidthImageStatic
      image={item.image.url}/>
  ))
