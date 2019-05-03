import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../'

const ButtonPrimary = ({classes = '', onClick = null, children = '', icon, disabled = false }) => (
  <button
    onClick={onClick}
    className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''} `}
    disabled={disabled} >
    <span className="btn-primary-text">{ children }</span>

    { icon &&
    <span className="icon">
      <Icon icon={icon}/>
    </span>
    }
  </button>
)

ButtonPrimary.propTypes = {
  classes: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default ButtonPrimary
