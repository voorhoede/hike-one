import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Icon } from '../../'

const ButtonCleanLink = ({
  classes = '',
  href = '',
  hrefAs = null,
  children,
  icon = '',
  target = '_self',
}) => (
  <Link href={href} as={hrefAs ? hrefAs : href}>
    <a className={`btn-clean ${classes} ${icon ? 'btn-icon' : ''}`} target={target}>
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
  classes: PropTypes.string,
  href: PropTypes.string,
  hrefAs: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  target: PropTypes.string,
}

export default ButtonCleanLink
