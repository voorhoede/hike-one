import React from 'react'
import PropTypes from 'prop-types'

const GoogleTagManagerMain = ({ id = '' }) => (
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
)

GoogleTagManagerMain.propTypes = {
  id: PropTypes.string,
}

export default GoogleTagManagerMain
