import React from 'react'
import PropTypes from 'prop-types'
import TrailDiamond from '../shapes/trail-diamond/trail-diamond'
import TrailTriangle from '../shapes/trail-triangle/trail-triangle'
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond'
import Parallax from '../parallax/parallax'

const ServicesItem = ({ data, index }) => (
  <li className="services-item clearfix">
    <div className="services-item-info">
      <h3 className="services-item-heading content">{data.title}</h3>
      <p className="services-item-text content" dangerouslySetInnerHTML={{ __html: data.text }} />
      <ul className="services-item-tags list-custom">
        {data.tags.map((tag, index) => (
          <li key={index} className="content list-custom-item">
            {tag.tag}
          </li>
        ))}
      </ul>
    </div>

    <div className="service-item-graphics">
      <Parallax speed="1.05">
        {index === 0 && <TrailDiamond shadow="true" />}
        {index === 1 && <TrailDoubleDiamond shadow="true" />}
        {index === 2 && <TrailTriangle shadow="true" />}
      </Parallax>
    </div>
  </li>
)

ServicesItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default ServicesItem
