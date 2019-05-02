import React from 'react'
import PropTypes from 'prop-types'

const TextCard = ({ title = '', text = '' }) => (
  <div className="text-card shadow">
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </div>
)

TextCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default TextCard
