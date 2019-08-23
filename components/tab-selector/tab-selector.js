import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { TrailDiamond, TrailDoubleDiamond, TrailTriangle } from './tab-selector-shapes'

const shapes = [
  TrailDiamond,
  TrailDoubleDiamond,
  TrailTriangle,
]

class TabSelector extends Component {
  constructor(props) {
    super(props)
    this.handleTabClick = this.handleTabClick.bind(this)
    this.state = {
      selectedTab: 0,
    }
  }

  componentWillMount() {
    const { services, selectedItem } = this.props
    const selectedTab = services.find(service => (service.slug === selectedItem)).position - 1

    this.setState({ selectedTab })
  }

  handleTabClick(index) {
    this.setState({ selectedTab: index })
  }

  render() {
    const { services = [], selectedItem = '' } = this.props
    const { selectedTab } = this.state
    const color = [ '#fe595b', '#45d33c', '#8314bb' ]
    const style = {
      transform: `translateX(${selectedTab * 100}%)`,
      backgroundColor: color[selectedTab],
    }

    return (
      <div className="tab-selector container shadow">
        {services.map((service, index) => (
          <TabItem
            key={index}
            Component={shapes[index]}
            onTabClick={() => this.handleTabClick(index)}
            selectedItem={selectedItem}
            slug={service.slug}
            title={service.title}></TabItem>
        ))}
        <div className="tab-selector__track">
          <span className="tab-selector__track-slider" style={style}></span>
        </div>
      </div>
    )
  }
}

const TabItem = ({ Component = null, onTabClick = null, selectedItem = '', slug = '', title = '' }) => (
  <Link href={`/service?slug=${slug}`} as={`/service/${slug}`}>
    <a className={`tab-selector-item ${selectedItem === slug ? 'is-selected' : ''}`} onClick={onTabClick}>
      <div className="tab-selector-item-shape">
        <Component />
      </div>
      <h2 className="tab-selector-item-title">{title}</h2>
    </a>
  </Link>
)

TabItem.propTypes = {
  Component: PropTypes.func,
  onTabClick: PropTypes.func,
  selectedItem: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
}

TabSelector.propTypes = {
  services: PropTypes.array,
  selectedItem: PropTypes.string,
}

export default TabSelector
