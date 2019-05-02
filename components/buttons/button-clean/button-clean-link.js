import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from '../../icon/icon'

const ButtonCleanLink = ({ classes = '', href, children, icon }) => (
  <Link href={href}>
    <a className={`btn-clean ${classes}`}>
      {children}
      {icon && (
        <span className="icon">
          <Icon icon={icon} />
        </span>
      )}
    </a>
  </Link>
)

ButtonCleanLink.propTypes = {
  classes: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
}

export default ButtonCleanLink
