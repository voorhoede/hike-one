import React from 'react'
import PropTypes from 'prop-types'

const OfficeOverview = ({ classes = '', header = '', children }) => (
  <div className={`office-overview container ${classes}`}>
    <div className="container-inner">
      <h2 className="office-overview-header">{header}</h2>
      {children}
    </div>
  </div>
)

OfficeOverview.propTypes = {
  classes: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default OfficeOverview
