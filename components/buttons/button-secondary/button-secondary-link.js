import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Icon } from '../../'

const ButtonSecondaryLink = ({
  classes = '',
  href,
  hrefAs = null,
  children,
  icon,
  target = '_self',
}) => (
  <Link href={href} as={`${hrefAs ? hrefAs : href}`}>
    <a target={target} className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}>
      {children}
      {icon && (
        <span className="icon">
          <Icon icon={icon} />
        </span>
      )}
    </a>
  </Link>
)

ButtonSecondaryLink.propTypes = {
  classes: PropTypes.string,
  href: PropTypes.string,
  hrefAs: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  target: PropTypes.string,
}

export default ButtonSecondaryLink
