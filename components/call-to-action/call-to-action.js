import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const CallToAction = ({
  title = '',
  url = '',
  bgColor = '',
  buttonText = '',
  fullWidth = false,
  titleWhite = false,
  isExternalLink = false,
}) => {
  const textColorClass = titleWhite ? 'title-white' : ''
  const containerClass = fullWidth ? 'container' : 'container-inner'
  const bgClass = bgColor ? 'call-to-action-bg-color' : ''

  return (
    <div
      className={`call-to-action ${containerClass} ${bgClass}`}
      style={{ backgroundColor: bgColor }}>
      {title && <p className={`call-to-action-title ${textColorClass}`}>{title}</p>}
      <Link href={url} prefetch={isExternalLink ? false : null}>
        <a
          className="call-to-action-button btn-primary btn-large content"
          target={isExternalLink ? '_blank' : '_self'}>
          {buttonText}
        </a>
      </Link>
    </div>
  )
}

CallToAction.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  bgColor: PropTypes.string,
  buttonText: PropTypes.string,
  fullWidth: PropTypes.bool,
  titleWhite: PropTypes.bool,
  isExternalLink: PropTypes.bool,
}

export default CallToAction
