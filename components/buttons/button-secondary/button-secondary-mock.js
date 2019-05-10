import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../'

const ButtonSecondaryMock = ({ classes = '', children, icon = '' }) => (
  <div className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}>
    {children}
    {icon && (
      <span className="icon">
        <Icon icon={icon} />
      </span>
    )}
  </div>
)

ButtonSecondaryMock.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
}

export default ButtonSecondaryMock
