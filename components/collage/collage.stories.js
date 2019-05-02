import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Data from '../../data/current/component-guide.json'
import Collage from './collage'

const item = Data.components.find(item => item.itemType === 'collage')

storiesOf('Collage', module)
  .addDecorator(withKnobs)
  .add('collage', () => (
    <Collage
      title={text('Title', item.title)}
      text={text('Text', item.text)}
      imageMedium={item.imageBig.url}
      imageSmall={item.imageSmall.url} >
    </Collage>
  ))
