import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text} from '@storybook/addon-knobs'
import InlineImage from './inline-image'
import Data from '../../data/current/component-guide.json'

const inlineImageData = Data.components.find(item => item.itemType === 'inline_image')

storiesOf('Inline image', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <InlineImage
      image={inlineImageData.image.url}
      caption={text('caption', inlineImageData.caption)}/>
  ))
