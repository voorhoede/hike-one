import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import TrailDiamond from '../shapes/trail-diamond/trail-diamond'
import TrailTriangle from '../shapes/trail-triangle/trail-triangle'
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond'

const TabSelector = ({ services, selectedItem }) => (
  <div className="tab-selector container shadow">
    <Link href={`/service?slug=${services[0].slug}`} as={`/service/${services[0].slug}`} prefetch>
      <a className={`tab-selector-item tab-selector-item-blue ${selectedItem === `${services[0].slug}` ? 'is-selected' : ''}`}>
        <div className="tab-selector-item-shape shadow">
          <TrailDiamond />
        </div>
        <h2 className="tab-selector-item-title">{services[0].title}</h2>
      </a>
    </Link>
    <Link href={`/service?slug=${services[1].slug}`} as={`/service/${services[1].slug}`} prefetch>
      <a className={`tab-selector-item tab-selector-item-green ${selectedItem === `${services[1].slug}` ? 'is-selected' : ''}`}>
        <div className="tab-selector-item-shape shadow">
          <TrailDoubleDiamond />
        </div>
        <h2 className="tab-selector-item-title">{services[1].title}</h2>
      </a>
    </Link>
    <Link href={`/service?slug=${services[2].slug}`} as={`/service/${services[2].slug}`} prefetch>
      <a className={`tab-selector-item tab-selector-item-purple ${selectedItem === `${services[2].slug}` ? 'is-selected' : ''}`}>
        <div className="tab-selector-item-shape shadow">
          <TrailTriangle />
        </div>
        <h2 className="tab-selector-item-title">{services[2].title}</h2>
      </a>
    </Link>
  </div>
)

TabSelector.propTypes = {
  services: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
}

export default TabSelector
