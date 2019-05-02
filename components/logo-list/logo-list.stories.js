import React from 'react'
import { storiesOf } from '@storybook/react'
import LogoList from './logo-list'

import Data from '../../data/current/component-guide.json'
const collaboration = Data.components.find(item => item.itemType === 'collaboration')

storiesOf('Logolist', module)
  .add('default', () => (
    <LogoList companies={collaboration.companies}></LogoList>
  ))
