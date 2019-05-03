import React from 'react'
import PropTypes from 'prop-types'
import { ServicesItem } from '../'
import ShapesFront from './services-overview-shapes-front'

const ServicesOverview = ({ title = '', items = [] }) => (
  <section className="services-overview">
    <div className="container-inner">
      <h2 className="section-header content">{title}</h2>
      <ul className="no-style">
        {items.map((service, index) => (
          <ServicesItem key={index} index={index} data={service} />
        ))}
      </ul>
    </div>
    <ShapesFront />
  </section>
)

ServicesOverview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default ServicesOverview
