import React from 'react'
import PropTypes from 'prop-types'

const BodyQuote = ({ quote = '', quotee = '' }) => (
  <blockquote className="body-quote">
    &quot;{quote}&quot;
    <cite className="body-quote-quotee">{quotee}</cite>
  </blockquote>
)

BodyQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  quotee: PropTypes.string.isRequired,
}

export default BodyQuote
