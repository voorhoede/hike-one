import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from '../../icon/icon'

const ButtonSecondaryLink = ({
  classes = '',
  href,
  hrefAs = null,
  children = '',
  icon,
  target = '',
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
  classes: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hrefAs: PropTypes.func.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
}

export default ButtonSecondaryLink
