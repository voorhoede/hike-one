import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AnimationDiamond, AnimationDoubleDiamond, AnimationTriangles } from './page-header-new-shapes.js'

const animationsByName = {
  'diamond': AnimationDiamond,
  'double diamond': AnimationDoubleDiamond,
  'triangles': AnimationTriangles,
}

class PageHeaderNew extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { animation, title } = this.props

    return (
      <section className="page-header-new">
        <PageHeaderNewAnimation Component={animationsByName[animation]} />
        <div className="page-header-new__content container">
          <h1 className="page-header-new__title">{title}</h1>
        </div>
      </section>
    )
  }
}

const PageHeaderNewAnimation = ({ Component = null }) => (
  <div className="page-header-new__animation">
    <Component />
  </div>
)

PageHeaderNewAnimation.propTypes = {
  Component: PropTypes.func,
}

PageHeaderNew.propTypes = {
  animation: PropTypes.oneOf(['diamond', 'double diamond', 'triangles']),
  title: PropTypes.string,
}

export default PageHeaderNew
