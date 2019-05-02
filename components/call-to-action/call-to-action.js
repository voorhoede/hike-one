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
      <Link href={url}>
        <a
          className="call-to-action-button btn-primary btn-large content"
          target={isExternalLink ? '_blank' : ''}>
          {buttonText}
        </a>
      </Link>
    </div>
  )
}

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  titleWhite: PropTypes.bool.isRequired,
  isExternalLink: PropTypes.bool.isRequired,
}

export default CallToAction
