import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from '../../icon/icon'

const PrimaryButtonLink = ({
  classes = '',
  href,
  hrefAs = null,
  children = '',
  icon,
  target = '',
}) => (
  <Link href={href} as={`${hrefAs ? hrefAs : href}`}>
    <a className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''}`} target={target}>
      {children}
      {icon && (
        <span className="icon">
          <Icon icon={icon} />
        </span>
      )}
    </a>
  </Link>
)

PrimaryButtonLink.propTypes = {
  classes: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hrefAs: PropTypes.func.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
}

export default PrimaryButtonLink
