import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../'

const ButtonClean = ({ classes = '', onClick = null, children, icon = '' }) => (
  <button onClick={onClick} className={`btn-clean ${classes}`}>
    {children}

    {icon && (
      <span className="icon">
        <Icon icon={icon} />
      </span>
    )}
  </button>
)

ButtonClean.propTypes = {
  classes: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
}

export default ButtonClean
