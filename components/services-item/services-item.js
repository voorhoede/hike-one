import React from 'react'
import PropTypes from 'prop-types'
import { Parallax, TrailDoubleDiamond, TrailDiamond, TrailTriangle } from '../'

const ServicesItem = ({ data = {}, index = 0 }) => (
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
        {index === 0 && <TrailDiamond shadow={true} />}
        {index === 1 && <TrailDoubleDiamond shadow={true} />}
        {index === 2 && <TrailTriangle shadow={true} />}
      </Parallax>
    </div>
  </li>
)

ServicesItem.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
}

export default ServicesItem
