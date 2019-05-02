import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import FullWidthHeader from './full-width-header'
import Data from '../../data/current/component-guide.json'

storiesOf('Full width header', module)
  .addDecorator(withKnobs)
  .add('full width header with text', () => (
    <FullWidthHeader
      color={text('color', '#11374a')}
      title={text('title', 'Designing a better user experience for a smart lock system')}
      authorName={text('author', 'Jesse Eikema')}
      headerImage={Data.caseHeaderImage.url}
      updatedDate={'2017-09-14'}
    />
  ))
