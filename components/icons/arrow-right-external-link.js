import React from 'react'
import PropTypes from 'prop-types'

const ArrowRightExternalLink = ({ fill = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill={fill}>
    <path d="M70.06,41.67a3.42,3.42,0,0,0,.17-.33,3.48,3.48,0,0,0,.11-.35c0-.1.07-.2.09-.3a3.52,3.52,0,0,0,0-1.37c0-.1-.06-.2-.09-.3a3.44,3.44,0,0,0-.11-.35,3.4,3.4,0,0,0-.17-.33c0-.09-.09-.18-.15-.27a3.53,3.53,0,0,0-.43-.53h0l-27-27a3.5,3.5,0,0,0-4.95,5l21,21H13a3.5,3.5,0,0,0,0,7H58.55l-21,21a3.5,3.5,0,1,0,4.95,5l27-27h0a3.53,3.53,0,0,0,.43-.53C70,41.85,70,41.76,70.06,41.67Z" />
  </svg>
)

ArrowRightExternalLink.propTypes = {
  fill: PropTypes.string.isRequired,
}

export default ArrowRightExternalLink
