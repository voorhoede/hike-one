import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Icon } from '../'

const NotificationBar = ({ color, callToActionLabel, callToActionUrl, text }) => (
  <div className="notification-bar" style={{ backgroundColor: color }}>
    <span>{text}</span>
    <Link href={callToActionUrl}>
      <a className="call-to-action-link">
        {callToActionLabel}
        <Icon icon="arrowRight" classes="icon icon-small" />
      </a>
    </Link>
  </div>
)

NotificationBar.propTypes = {
  color: PropTypes.string.isRequired,
  callToActionLabel: PropTypes.string.isRequired,
  callToActionUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NotificationBar
