import React from 'react'

import ServicesItem from '../services-item/services-item'
import ShapesFront from './services-overview-shapes-front'

const ServicesOverview = ({title = '', items = []}) => (
  <section className="services-overview">

    <div className="container-inner">
      <h2 className="section-header content">{title}</h2>
      <ul className="no-style">
        { items.map((service, index) => <ServicesItem key={index} index={index} data={service}/>) }
      </ul>
    </div>
    <ShapesFront />
  </section>
)

export default ServicesOverview
