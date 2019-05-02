import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../icon/icon'

const ButtonPrimaryMock = ({ classes = '', children = '', icon }) => (
  <div className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''} `}>
    <span className="btn-primary-text">{children}</span>

    {icon && (
      <span className="icon">
        <Icon icon={icon} />
      </span>
    )}
  </div>
)

ButtonPrimaryMock.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
}

export default ButtonPrimaryMock
