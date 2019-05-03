import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../'

const ButtonSecondary = ({
  classes = '',
  onClick = null,
  children = '',
  icon = '',
  disabled = false,
}) => (
  <button
    onClick={onClick}
    className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}
    disabled={disabled}>
    {children}

    {icon && (
      <span className="icon">
        <Icon icon={icon} />
      </span>
    )}
  </button>
)

ButtonSecondary.propTypes = {
  classes: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default ButtonSecondary
