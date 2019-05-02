import React from 'react'
import PropTypes from 'prop-types'

const PlaygroundOverview = ({ classes = '', title = '', children }) => (
  <div className={`playground-overview container ${classes}`}>
    <div className="container-inner">
      <h2 className="playground-overview-header">{title}</h2>
      {children}
    </div>
  </div>
)

PlaygroundOverview.propTypes = {
  classes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default PlaygroundOverview
