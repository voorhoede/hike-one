import React from 'react'
import { storiesOf } from '@storybook/react'
import ServicesOverviewSmall from './services-overview-small'
import Data from '../../data/current/home.json'

storiesOf('Service overview small', module)
  .add('service overview small', () => (
    <ServicesOverviewSmall title={Data.servicesItemTitle}  services={Data.serviceItems} />
  ))
