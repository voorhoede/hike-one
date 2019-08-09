import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { timelineDiamond, timelineDoubleDiamond, timelineTriangles } from './page-header-new-animations.js'
import { ShapesDiamond, ShapesDoubleDiamond, ShapesTriangles } from './page-header-new-shapes.js'

class PageHeaderNew extends Component {
  constructor(props) {
    super(props)
    this.playTimeline = this.playTimeline.bind(this)
    this.setTimeline = this.setTimeline.bind(this)
    this.timeline = null
    this.currentColor = '#ffffff';
    this.colorByName = {
      'diamond': '#fe595b',
      'double diamond': '#45d33c',
      'triangles': '#ffe044',
    }
  }

  componentDidMount() {
    this.setTimeline()
    this.playTimeline()
  }

  componentWillUpdate() {
    const { animation } = this.props;

    this.currentColor = this.colorByName[animation]
    this.timeline.pause()
  }

  componentDidUpdate() {
    this.setTimeline()
    this.playTimeline()
  }

  setTimeline() {
    const { animation } = this.props
    const animationByName = {
      'diamond': timelineDiamond(),
      'double diamond': timelineDoubleDiamond(),
      'triangles': timelineTriangles(),
    }

    this.timeline = animationByName[animation]
  }

  playTimeline() {
    this.timeline.timeScale(1).play()
  }

  render() {
    const { animation, title } = this.props
    const shapesByName = {
      'diamond': ShapesDiamond,
      'double diamond': ShapesDoubleDiamond,
      'triangles': ShapesTriangles,
    }

    return (
      <section className="page-header-new" style={{ backgroundColor: this.currentColor }}>
        <PageHeaderNewAnimation Component={shapesByName[animation]} color={this.colorByName[animation]} />
        <div className="page-header-new__content container">
          <h1 className="page-header-new__title">{title}</h1>
        </div>
      </section>
    )
  }
}

const PageHeaderNewAnimation = ({ Component = null, color = '' }) => (
  <div className="page-header-new__animation">
    <div className="page-header-new__animation-background" style={{ backgroundColor: color }}></div>
    <Component />
  </div>
)

PageHeaderNewAnimation.propTypes = {
  Component: PropTypes.func,
  color: PropTypes.string,
}

PageHeaderNew.propTypes = {
  animation: PropTypes.oneOf(['diamond', 'double diamond', 'triangles']),
  title: PropTypes.string,
}

export default PageHeaderNew
