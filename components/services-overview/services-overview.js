import React from 'react'
import PropTypes from 'prop-types'
import { ServiceItem } from '..'
import { TrailDiamond, TrailDoubleDiamond, TrailTriangle } from './services-overview-shapes.js'

const shapes = [
  TrailDiamond,
  TrailDoubleDiamond,
  TrailTriangle,
]

const ServicesOverview = ({ services = [], title = '', classes = '' }) => (
  <div className={`services-overview container clearfix ${classes}`}>
    <div className="services-overview__header">{title}</div>
    <div className="container-inner">
      {Object.values(services).map((item, index) => (
        <ServiceItem
          key={index}
          item={item}
          Component={shapes[index]} />
      ))}
    </div>
  </div>
)

ServicesOverview.propTypes = {
  services: PropTypes.array,
  title: PropTypes.string,
  classes: PropTypes.string,
}

export default ServicesOverview
