import React from 'react'
import PropTypes from 'prop-types'

const CompanyOverviewSmall = ({ children }) => (
  <div className="company-overview-small container clearfix">{children}</div>
)

CompanyOverviewSmall.propTypes = {
  children: PropTypes.node,
}

export default CompanyOverviewSmall
