import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text} from '@storybook/addon-knobs'
import UpdateExtractSmall from './update-extract-small'
import MockImageData from '../../data/current/home.json'

storiesOf('Update extract', module)
  .addDecorator(withKnobs)
  .add('update extract small', () => (
    <UpdateExtractSmall
      extractImage={MockImageData.caseExtract.image.url}
      title={text('Title', 'Hike One was at PUSH Conference in München')}
      date={text('Date', 'July 6 2017')}
      name={text('Name', 'Nick Hoogendoorn')} 
      color={text('Color', '#E45052')}>
    </UpdateExtractSmall>
  ))
