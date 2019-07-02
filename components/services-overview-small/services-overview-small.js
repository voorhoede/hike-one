import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ButtonSecondaryMock } from '../'

import TrailDiamond from '../shapes/animated/trail-diamond/trail-diamond.js'
import TrailDoubleDiamond from '../shapes/animated/trail-double-diamond/trail-double-diamond.js'
import TrailTriangle from '../shapes/animated/trail-triangle/trail-triangle.js'

const shapesList = ['diamond', 'doubleDiamond', 'triangle']
const shapes = {
  diamond: TrailDiamond,
  triangle: TrailTriangle,
  doubleDiamond: TrailDoubleDiamond,
}

class ServicesOverviewSmall extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { services = [], title = '', classes = '' } = this.props

    return (
      <div className={`services-overview-small container clearfix ${classes}`}>
        <div className="services-overview-small-header">{title}</div>
        <div className="container-inner">
          {Object.values(services).map((item, index) => {
            const Component = shapes[shapesList[index]]
            const hasLink = item.link && item.link.slug

            return hasLink
              ? <ServicesItemLink
                  key={index}
                  item={item}
                  Component={Component} />
              : <ServicesItem
                  key={index}
                  item={item}
                  Component={Component} />
          })}
        </div>
      </div>
    )
  }
}

ServicesOverviewSmall.propTypes = {
  childRef: PropTypes.func,
  services: PropTypes.array,
  title: PropTypes.string,
  classes: PropTypes.string,
}

const ServicesItem = ({ item = {}, Component = null }) => (
  <div className="services-item-small">
    <div className="services-item-small__spacer">
      <div className={`services-item-small__shape ${item.iconColor.color}`}></div>
      <Component />
    </div>
    <div className="services-item-small-content">
      <h3 className="services-item-small-heading">{item.title}</h3>
      <p className="services-item-description">{item.text}</p>
      <ButtonSecondaryMock icon="arrowRight" classes="btn-red-border btn-wide">
        {item.button}
      </ButtonSecondaryMock>
    </div>
  </div>
)

ServicesItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.func,
}

const ServicesItemLink = ({ item = {}, Component = null }) => (
  <Link href={`/service?slug=${item.link.slug}`} as={`/service/${item.link.slug}`}>
    <a id={item.link.slug} className="services-item-small">
      <div className="services-item-small__spacer">
        <div className={`services-item-small__shape ${item.iconColor.color}`}></div>
        <Component />
      </div>
      <div className="services-item-small-content">
        <h3 className="services-item-small-heading">{item.title}</h3>
        <p className="services-item-description">{item.text}</p>
        <ButtonSecondaryMock icon="arrowRight" classes="btn-red-border btn-wide">
          {item.button}
        </ButtonSecondaryMock>
      </div>
    </a>
  </Link>
)

ServicesItemLink.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.func,
}

export default ServicesOverviewSmall
